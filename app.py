import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from config import api_key
from config import app_id
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
#################################################
# Flask Routes
#################################################

engine = create_engine("postgresql+psycopg2://postgres:postgres@localhost:5432/jobsearch")


@app.route("/")
def welcome():
    

    engine = create_engine(
        "postgresql+psycopg2://postgres:postgres@localhost:5432/jobsearch")

    
    title_count()
    return None

@app.route("/api/title_count", methods=['GET'])
@cross_origin()
def title_count():
    df = pd.read_sql("""
SELECT title, count(title)
FROM results_78205
GROUP BY title
ORDER BY 2 DESC
LIMIT 9;         
""", con=engine)
    return jsonify({x:df[x].tolist() for x in df})

@app.route("/api/min_max", methods=['GET'])
@cross_origin()
def min_max():
    df1 = pd.read_sql("""
SELECT t_max.title, max_salary, min_salary
FROM
(
SELECT 'Business Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Business Analyst%%'
UNION ALL
SELECT 'Remote Data Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Remote Data Analyst%%'
UNION ALL
SELECT 'Data Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Data Analyst%%'
UNION ALL
SELECT 'Sr Functional Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Sr Functional Analyst%%') AS t_max

JOIN (SELECT 'Business Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Business Analyst%%'
UNION ALL
SELECT 'Remote Data Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Remote Data Analyst%%'
UNION ALL
SELECT 'Data Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Data Analyst%%'
UNION ALL
SELECT 'Sr Functional Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Sr Functional Analyst%%'
) as t_min
ON t_max.title = t_min.title;        
""", con=engine)
    
    return jsonify({x:df1[x].tolist() for x in df1})



if __name__ == '__main__':
    app.run(debug=True)

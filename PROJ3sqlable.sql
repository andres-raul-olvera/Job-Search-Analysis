SELECT * FROM results_78205;

SELECT title, count(title)
FROM results_78205
GROUP BY title
ORDER BY 2 DESC
LIMIT 4;


SELECT company, count(company)
FROM results_78205
GROUP BY company
ORDER BY 2 DESC
LIMIT 5;

SELECT MAX(salary_max) as salary from results_78205
WHERE title LIKE 'Business Analyst%';

SELECT MIN(salary_min) from results_78205
WHERE title LIKE 'Business Analyst%';


SELECT MAX(salary_max) from results_78205
WHERE title LIKE 'Remote Data Analyst%';
SELECT MIN(salary_min) from results_78205
WHERE title LIKE 'Remote Data Analyst%';

SELECT MAX(salary_max) from results_78205
WHERE title LIKE 'Data Analyst%';
SELECT MIN(salary_min) from results_78205
WHERE title LIKE 'Data Analyst%';

SELECT MAX(salary_min) from results_78205
WHERE title LIKE 'Sr Functional Analyst%';
SELECT MIN(salary_min) from results_78205
WHERE title LIKE 'Sr Functional Analyst%';

SELECT t_max.title, max_salary, min_salary
FROM
(
SELECT 'Business Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Business Analyst%'
UNION ALL
SELECT 'Remote Data Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Remote Data Analyst%'
UNION ALL
SELECT 'Data Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Data Analyst%'
UNION ALL
SELECT 'Sr Functional Analyst' as title, MAX(salary_max) as max_salary from results_78205
WHERE title LIKE 'Sr Functional Analyst%') AS t_max

JOIN (SELECT 'Business Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Business Analyst%'
UNION ALL
SELECT 'Remote Data Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Remote Data Analyst%'
UNION ALL
SELECT 'Data Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Data Analyst%'
UNION ALL
SELECT 'Sr Functional Analyst' as title, MIN(salary_max) as min_salary from results_78205
WHERE title LIKE 'Sr Functional Analyst%'
) as t_min
ON t_max.title = t_min.title



SELECT DISTINCT title FROM results_78205;


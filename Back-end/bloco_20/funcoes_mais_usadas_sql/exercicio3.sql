SELECT JOB_ID, FLOOR(AVG(SALARY)) AS Salário FROM hr.employees
GROUP BY JOB_ID
ORDER BY Salário DESC;
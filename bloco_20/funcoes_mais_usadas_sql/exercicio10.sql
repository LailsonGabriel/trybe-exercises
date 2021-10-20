SELECT JOB_ID, COUNT(department_id), AVG(SALARY) AS Média FROM hr.employees
GROUP BY department_id, JOB_ID;
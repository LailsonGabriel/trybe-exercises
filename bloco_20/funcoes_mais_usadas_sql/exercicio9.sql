SELECT JOB_ID, AVG(SALARY) AS media_salarial FROM hr.employees
GROUP BY JOB_ID
HAVING media_salarial <> 'IT_PROG'
ORDER BY media_salarial DESC;
---
sidebar_position: 8
sidebar_label: 'SQL Commands'
id: sql-commands
description: "A quick reference guide for commonly used SQL commands and statements, including basic syntax and examples."
slug: /sql-commands
tags:
- Cheat Sheet
- SQL
- Statements
- Commands
- Database
- SQL commands
- SQL statements
- SQL functions
- SQL tips
- SQL reference
- SQL tutorial
- SQL guide
- SQL syntax
- SQL basics
---

# SQL - Cheat Sheet

This is a basic SQL cheat sheet that covers the most commonly used SQL statements and functions. 

:::info
Keep in mind that different SQL databases have slightly different syntax and features, so consult the documentation for the specific database you are using for more information.
:::

## `SELECT` Statement
`SELECT` columns from a table
```sql
SELECT column1, column2, ...
FROM table_name;
```

`SELECT DISTINCT` unique values from a column
```sql
SELECT DISTINCT column_name
FROM table_name;
```

`WHERE` clause to filter rows
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

`ORDER BY` clause to sort the result set
```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC | DESC];
```

`LIMIT` clause to limit the number of rows returned
```sql
SELECT column1, column2, ...
FROM table_name
LIMIT number_of_rows;
```

## `GROUP BY` and `HAVING` Clause

`GROUP BY` clause to group rows by one or more columns
```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;
```

`HAVING` clause to filter groups based on a aggregate function
```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING aggregate_function(column2) operator value;
```

## `INSERT` Statement
`INSERT INTO` statement to insert new rows into a table
```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

## `UPDATE` Statement
`UPDATE` statement to modify existing rows in a table
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## `DELETE` Statement
```sql
DELETE FROM table_name
WHERE condition;
```

## `JOIN`
`JOIN` clause to combine rows from two or more tables based on a related column between them.
```sql
SELECT column1, column2, ...
FROM table1
JOIN table2
ON table1.column = table2.column;
```

`LEFT JOIN` returns all rows from the left table, and the matched rows from the right table
```sql
SELECT column1, column2, ...
FROM table1
LEFT JOIN table2
ON table1.column = table2.column;
```

`RIGHT JOIN` returns all rows from the right table, and the matched rows from the left table
```sql
SELECT column1, column2, ...
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;
```

## `CREATE`
`CREATE DATABASE` statement to create a new database
```sql
CREATE DATABASE database_name;
```

`CREATE TABLE` statement to create a new table
```sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);
```

## `ALTER`
`ALTER DATABASE` statement to modify the current database
```sql
ALTER DATABASE database_name
SET new_property = value;
```

`ALTER TABLE` statement to add a new column to a table
```sql
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;
```

`ALTER TABLE` statement to modify the datatype of a column
```sql
ALTER TABLE table_name
MODIFY COLUMN column_name new_datatype constraint;
```

`ALTER TABLE` statement to rename a table
```sql
ALTER TABLE table_name
RENAME TO new_table_name;
```

## INDEX

`CREATE INDEX` statement to create an index on a table
```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

`DROP INDEX` statement to delete an index
```sql
DROP INDEX index_name;
```

## VIEW

`CREATE VIEW` statement to create a view
```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

`DROP VIEW` statement to delete a view
```sql
DROP VIEW view_name;
```

## Function

`COUNT()` function returns the number of rows
```sql
SELECT COUNT(column_name)
FROM table_name;
```

`SUM()` function returns the total value of a numeric column
```sql
SELECT SUM(column_name)
FROM table_name;
```

`AVG()` function returns the average value of a numeric column
```sql
SELECT AVG(column_name)
FROM table_name;
```

`MAX()` function returns the maximum value of a column
```sql
SELECT MAX(column_name)
FROM table_name;
```

`MIN()` function returns the minimum value of a column
```sql
SELECT MIN(column_name)
FROM table_name;
```

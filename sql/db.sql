CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK ( name <> '' ),
    priority INTEGER NOT NULL,
    description TEXT,
    deliveryDate DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId INTEGER REFERENCES projects (id)

);

INSERT INTO projects (name, priority, description, deliveryDate)
    VALUES('MAKE AN APP', 2, 'Using NodeJS','2020-07-14');

INSERT INTO tasks (name, done, projectId)
    VALUES('Download VueJs', true, 1);

INSERT INTO tasks (name, done, projectId)
    VALUES('Create UI WEP', false, 1);

INSERT INTO tasks (name, done, projectId)
    VALUES('Download Flutter', false, 2);
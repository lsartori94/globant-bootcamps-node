#### What is a database?

A database is a collection of data used in a website or application. There are various ways of representing data, but in this workshop we focus on data represented in tables with rows and columns (like Excel). Databases are useful because they are persistent and scalable. 

Within a database, a schema represents how the data is organized, specifying the format and type. For example, we might have two columns called ‘name’ and ‘age’, with name being a type of string, and age being a type of integer.

What is SQL?

SQL stands for Structured Query Language, and a query is a request for information from the database. To begin, we introduced the basic structure of SQL queries.

![SQL Cheat Sheet 1](../../assets/SQL-Cheet-Sheet-1.png)

![SQL Cheat Sheet 2](../../assets/SQL-Cheat-Sheet-2.png)

![SQL Cheat Sheet 3](../../assets/SQL-Cheat-Sheet-3.png)

![SQL Join Types](../../assets/sql-join-types.jpg)

#### What is ORM?

Object-Relational Mapping is a technique that lets you query and manipulates data from a database using an object-oriented paradigm. ORM loves objects as much as developers, and is available for any programming languagee of your choosing.

OK, but what does an ORM do?

ORMs can be thought of as a translator converting our code from one form to another.

The ORM software generates objects (as in OOP) that virtually map (like the map of a city) the tables in your database. Then the programmer would use these objects to interact and play with the database! So the core idea is to try and shield the programmer from having to write optimized and complex SQL code — the ORM generated objects take care of that for you.

![ORM](../../assets/orm.png)


### What is PostgreSQL?

PostgreSQL comes with many features aimed to help developers build applications, administrators to protect data integrity and build fault-tolerant environments, and help you manage your data no matter how big or small the dataset. In addition to being free and open source, PostgreSQL is highly extensible. For example, you can define your own data types, build out custom functions, even write code from different programming languages without recompiling your database!

### Sequelize

Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

#### Getting started

- [Getting started](http://docs.sequelizejs.com/manual/installation/getting-started.html)

##### Installing

Sequelize is available via npm (or yarn).

```npm install --save sequelize```

You'll also have to manually install the driver for your database of choice:

##### One of the following:

```
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```


##### Setting up a connection

To connect to the database, you must create a Sequelize instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:

```
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

// Option 2: Passing a connection URI
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
```

The Sequelize constructor takes a whole slew of options that are documented in the API Reference for the Sequelize constructor.

- [Migrations](http://docs.sequelizejs.com/manual/migrations.html)

#### Migrations

Just like you use Git / SVN to manage changes in your source code, you can use migrations to keep track of changes to the database. With migrations you can transfer your existing database into another state and vice versa: Those state transitions are saved in migration files, which describe how to get to the new state and how to revert the changes in order to get back to the old state.

You will need Sequelize CLI. The CLI ships support for migrations and project bootstrapping.

##### The CLI

Installing CLI
Let's start with installing CLI, you can find instructions here. Most preferred way is installing locally like this

```$ npm install --save sequelize-cli```

##### Bootstrapping

To create an empty project you will need to execute ```init``` command

```$ npx sequelize-cli init```

This will create following folders

```config```, contains config file, which tells CLI how to connect with database
```models```, contains all models for your project
```migrations```, contains all migration files
```seeders```, contains all seed files

##### Configuration

Before continuing further we will need to tell CLI how to connect to database. To do that let's open default config file ```config/config.json```. It looks something like this

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

Now edit this file and set correct database credentials and dialect.

Note: If your database doesn't exists yet, you can just call db:create command. With proper access it will create that database for you.


##### The .sequelizerc File

This is a special configuration file. It lets you specify various options that you would usually pass as arguments to CLI. Some scenarios where you can use it.

- You want to override default path to ```migrations```, ```models```, ```seeders``` or ```config``` folder.
- You want to rename ```config.json``` to something else like ```database.json```
- And a whole lot more. Let's see how you can use this file for custom configuration.

For starters, let's create an empty file in the root directory of your project.

```$ touch .sequelizerc```

Now let's work with an example config.

```
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
}
```

With this config you are telling CLI to

- Use ```config/database.json``` file for config settings
- Use ```db/models``` as models folder
- Use ```db/seeders``` as seeders folder
- Use ```db/migrations``` as migrations folder

##### Dynamic Configuration

Configuration file is by default a JSON file called ```config.json```. But sometimes you want to execute some code or access environment variables which is not possible in JSON files.

Sequelize CLI can read from both ```JSON``` and ```JS``` files. This can be setup with ```.sequelizerc``` file. Let see how

First you need to create a ```.sequelizerc``` file in the root folder of your project. This file should override config path to a ```JS``` file. Like this

```
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js')
}
```

Now Sequelize CLI will load ```config/config.js``` for getting configuration options. Since this is a ```JS``` file you can have any code executed and export final dynamic configuration file.

An example of ```config/config.js``` file

```
const fs = require('fs');

module.exports = {
  development: {
    username: 'database_dev',
    password: 'database_dev',
    database: 'database_dev',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      }
    }
  }
};
```

##### Creating first Model (and Migration)

Once you have properly configured CLI config file you are ready to create your first migration. It's as simple as executing a simple command.

We will use ```model:generate``` command. This command requires two options

- ```name```, Name of the model
- ```attributes```, List of model attributes
Let's create a model named ```User```.

```$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string```

##### This will do following

- Create a model file ```user``` in ```models``` folder
- Create a migration file with name like ```XXXXXXXXXXXXXX-create-user.js``` in ```migrations``` folder
Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.

##### Running Migrations

Until this step, we haven't inserted anything into the database. We have just created required model and migration files for our first model User. Now to actually create that table in database you need to run ```db:migrate``` command.

```$ npx sequelize-cli db:migrate```

This command will execute these steps:

Will ensure a table called ```SequelizeMeta``` in database. This table is used to record which migrations have run on the current database
Start looking for any migration files which haven't run yet. This is possible by checking ```SequelizeMeta``` table. In this case it will run ```XXXXXXXXXXXXXX-create-user.js``` migration, which we created in last step.
Creates a table called Users with all columns as specified in its migration file.

###### Modeling a table
A model is a class that extends ```Sequelize.Model```. Models can be defined in two equivalent ways. The first, with ```Sequelize.Model.init(attributes, options)```:

```
const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});
```

Alternatively, using ```sequelize.define```:

```
const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  // options
});
```

Internally, ```sequelize.define``` calls ```Model.init```.

The above code tells Sequelize to expect a table named ```users``` in the database with the fields ```firstName``` and ```lastName```. The table name is automatically pluralized by default (a library called ```inflection``` is used under the hood to do this). This behavior can be stopped for a specific model by using the ```freezeTableName: true``` option, or for all models by using the ```define``` option from the ```Sequelize constructor```.

Sequelize also defines by default the fields ```id``` (primary key), ```createdAt``` and ```updatedAt``` to every model. This behavior can also be changed, of course (check the API Reference to learn more about the available options).



### Raw queries

- [Raw queries](http://docs.sequelizejs.com/manual/tutorial/raw-queries.html)

##### Executing raw SQL queries

As there are often use cases in which it is just easier to execute raw / already prepared SQL queries, you can utilize the function sequelize.query.

See [Sequelize.query API](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-query)
See [Query Types](http://docs.sequelizejs.com/variable/index.html#static-variable-QueryTypes)

Here is how it works:

### Model definition

To define mappings between a model and a table, use the ```define``` method. Each column must have a datatype, see more about ```datatypes```.

```
class Project extends Model {}
Project.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT
}, { sequelize, modelName: 'project' });

class Task extends Model {}
Task.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
}, { sequelize, modelName: 'task' })
```

Apart from datatypes, there are plenty of options that you can set on each column.

```
class Foo extends Model {}
Foo.init({
 // instantiating will automatically set the flag to true if not set
 flag: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },

 // default values for dates => current time
 myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },

 // setting allowNull to false will add NOT NULL to the column, which means an error will be
 // thrown from the DB when the query is executed if the column is null. If you want to check that a value
 // is not null before querying the DB, look at the validations section below.
 title: { type: Sequelize.STRING, allowNull: false },

 // Creating two objects with the same value will throw an error. The unique property can be either a
 // boolean, or a string. If you provide the same string for multiple columns, they will form a
 // composite unique key.
 uniqueOne: { type: Sequelize.STRING,  unique: 'compositeIndex' },
 uniqueTwo: { type: Sequelize.INTEGER, unique: 'compositeIndex' },

 // The unique property is simply a shorthand to create a unique constraint.
 someUnique: { type: Sequelize.STRING, unique: true },

 // It's exactly the same as creating the index in the model's options.
 { someUnique: { type: Sequelize.STRING } },
 { indexes: [ { unique: true, fields: [ 'someUnique' ] } ] },

 // Go on reading for further information about primary keys
 identifier: { type: Sequelize.STRING, primaryKey: true },

 // autoIncrement can be used to create auto_incrementing integer columns
 incrementMe: { type: Sequelize.INTEGER, autoIncrement: true },

 // You can specify a custom column name via the 'field' attribute:
 fieldWithUnderscores: { type: Sequelize.STRING, field: 'field_with_underscores' },

 // It is possible to create foreign keys:
 bar_id: {
   type: Sequelize.INTEGER,

   references: {
     // This is a reference to another model
     model: Bar,

     // This is the column name of the referenced model
     key: 'id',

     // This declares when to check the foreign key constraint. PostgreSQL only.
     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
   }
 },

 // It is possible to add coments on columns for MySQL, PostgreSQL and MSSQL only
 commentMe: {
   type: Sequelize.INTEGER,

   comment: 'This is a column name that has a comment'
 }
}, {
  sequelize,
  modelName: 'foo'
});
```

The comment option can also be used on a table, see ```model configuration```.

#### Database synchronization

When starting a new project you won't have a database structure and using Sequelize you won't need to. Just specify your model structures and let the library do the rest. Currently supported is the creation and deletion of tables:

```
// Create the tables:
Project.sync()
Task.sync()

// Force the creation!
Project.sync({force: true}) // this will drop the table first and re-create it afterwards

// drop the tables:
Project.drop()
Task.drop()

// event handling:
Project.[sync|drop]().then(() => {
  // ok ... everything is nice!
}).catch(error => {
  // oooh, did you enter wrong database credentials?
})
```

Because synchronizing and dropping all of your tables might be a lot of lines to write, you can also let Sequelize do the work for you:

```
// Sync all models that aren't already in the database
sequelize.sync()

// Force sync all models
sequelize.sync({force: true})

// Drop all tables
sequelize.drop()

// emit handling:
sequelize.[sync|drop]().then(() => {
  // woot woot
}).catch(error => {
  // whooops
})
```

Because ```.sync({ force: true })``` is destructive operation, you can use ```match``` option as an additional safety check. match option tells sequelize to ```match``` a regex against the database name before syncing - a safety check for cases where ```force: true``` is used in tests but not live code.

```
// This will run .sync() only if database name ends with '_test'
sequelize.sync({ force: true, match: /_test$/ });
```


### Data types

Below are some of the datatypes supported by sequelize. For a full and updated list, see DataTypes.
- [DataTypes](http://docs.sequelizejs.com/manual/data-types.html)

```
Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
Sequelize.TEXT                        // TEXT
Sequelize.TEXT('tiny')                // TINYTEXT
Sequelize.CITEXT                      // CITEXT      PostgreSQL and SQLite only.

Sequelize.INTEGER                     // INTEGER
Sequelize.BIGINT                      // BIGINT
Sequelize.BIGINT(11)                  // BIGINT(11)

Sequelize.FLOAT                       // FLOAT
Sequelize.FLOAT(11)                   // FLOAT(11)
Sequelize.FLOAT(11, 10)               // FLOAT(11,10)

Sequelize.REAL                        // REAL        PostgreSQL only.
Sequelize.REAL(11)                    // REAL(11)    PostgreSQL only.
Sequelize.REAL(11, 12)                // REAL(11,12) PostgreSQL only.

Sequelize.DOUBLE                      // DOUBLE
Sequelize.DOUBLE(11)                  // DOUBLE(11)
Sequelize.DOUBLE(11, 10)              // DOUBLE(11,10)

Sequelize.DECIMAL                     // DECIMAL
Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)

Sequelize.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
Sequelize.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
Sequelize.DATEONLY                    // DATE without time.
Sequelize.BOOLEAN                     // TINYINT(1)

Sequelize.ENUM('value 1', 'value 2')  // An ENUM with allowed values 'value 1' and 'value 2'
Sequelize.ARRAY(Sequelize.TEXT)       // Defines an array. PostgreSQL only.
Sequelize.ARRAY(Sequelize.ENUM)       // Defines an array of ENUM. PostgreSQL only.

Sequelize.JSON                        // JSON column. PostgreSQL, SQLite and MySQL only.
Sequelize.JSONB                       // JSONB column. PostgreSQL only.

Sequelize.BLOB                        // BLOB (bytea for PostgreSQL)
Sequelize.BLOB('tiny')                // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)

Sequelize.UUID                        // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)

Sequelize.CIDR                        // CIDR datatype for PostgreSQL
Sequelize.INET                        // INET datatype for PostgreSQL
Sequelize.MACADDR                     // MACADDR datatype for PostgreSQL

Sequelize.RANGE(Sequelize.INTEGER)    // Defines int4range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.BIGINT)     // Defined int8range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATE)       // Defines tstzrange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATEONLY)   // Defines daterange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DECIMAL)    // Defines numrange range. PostgreSQL only.

Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // Defines array of tstzrange ranges. PostgreSQL only.

Sequelize.GEOMETRY                    // Spatial column.  PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT')           // Spatial column with geometry type. PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT', 4326)     // Spatial column with geometry type and SRID.  PostgreSQL (with PostGIS) or MySQL only.

```

In addition to the type mentioned above, integer, bigint, float and double also support unsigned and zerofill properties, which can be combined in any order: Be aware that this does not apply for PostgreSQL!

```
Sequelize.INTEGER.UNSIGNED              // INTEGER UNSIGNED
Sequelize.INTEGER(11).UNSIGNED          // INTEGER(11) UNSIGNED
Sequelize.INTEGER(11).ZEROFILL          // INTEGER(11) ZEROFILL
Sequelize.INTEGER(11).ZEROFILL.UNSIGNED // INTEGER(11) UNSIGNED ZEROFILL
Sequelize.INTEGER(11).UNSIGNED.ZEROFILL // INTEGER(11) UNSIGNED ZEROFILL

```

### Model usage

##### Data retrieval / Finders

Finder methods are intended to query data from the database. They do not return plain objects but instead return model instances. Because finder methods return model instances you can call any model instance member on the result as described in the documentation for ```instances```.

 - [Instances](http://docs.sequelizejs.com/manual/tutorial/instances.html)

In this document we'll explore what finder methods can do:

###### find - Search for one specific element in the database

```
// search for known ids
Project.findByPk(123).then(project => {
  // project will be an instance of Project and stores the content of the table entry
  // with id 123. if such an entry is not defined you will get null
})

// search for attributes
Project.findOne({ where: {title: 'aProject'} }).then(project => {
  // project will be the first entry of the Projects table with the title 'aProject' || null
})
```

##### findOrCreate - Search for a specific element or create it if not available

The method ```findOrCreate``` can be used to check if a certain element already exists in the database. If that is the case the method will result in a respective instance. If the element does not yet exist, it will be created.

Let's assume we have an empty database with a User model which has a ```username``` and a ```job```.

```
User
  .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
  .then(([user, created]) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created)

    /*
     findOrCreate returns an array containing the object that was found or created and a boolean that
     will be true if a new object was created and false if not, like so:

    [ {
        username: 'sdepold',
        job: 'Technical Lead JavaScript',
        id: 1,
        createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
        updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
      },
      true ]

 In the example above, the array spread on line 3 divides the array into its 2 parts and passes them
  as arguments to the callback function defined beginning at line 39, which treats them as "user" and
  "created" in this case. (So "user" will be the object from index 0 of the returned array and
  "created" will equal "true".)
    */
  })
```

##### findAndCountAll - Search for multiple elements in the database, returns both data and total count

This is a convenience method that combines ```findAll``` and ```count``` (see below) this is useful when dealing with queries related to pagination where you want to retrieve data with a ```limit``` and ```offset``` but also need to know the total number of records that match the query:

The success handler will always receive an object with two properties:

- ```count``` - an integer, total number records matching the where clause and other filters due to associations
- ```rows```- an array of objects, the records matching the where clause and other filters due to associations, within the limit and offset range

```
Project
  .findAndCountAll({
     where: {
        title: {
          [Op.like]: 'foo%'
        }
     },
     offset: 10,
     limit: 2
  })
  .then(result => {
    console.log(result.count);
    console.log(result.rows);
  });
```


It support includes. Only the includes that are marked as ```required``` will be added to the count part:

Suppose you want to find all users who have a profile attached:

```
User.findAndCountAll({
  include: [
     { model: Profile, required: true}
  ],
  limit: 3
});
```

##### findAll - Search for multiple elements in the database

```
// find multiple entries
Project.findAll().then(projects => {
  // projects will be an array of all Project instances
})

// search for specific attributes - hash usage
Project.findAll({ where: { name: 'A Project' } }).then(projects => {
  // projects will be an array of Project instances with the specified name
})

// search within a specific range
Project.findAll({ where: { id: [1,2,3] } }).then(projects => {
  // projects will be an array of Projects having the id 1, 2 or 3
  // this is actually doing an IN query
})

Project.findAll({
  where: {
    id: {
      [Op.and]: {a: 5},           // AND (a = 5)
      [Op.or]: [{a: 5}, {a: 6}],  // (a = 5 OR a = 6)
      [Op.gt]: 6,                // id > 6
      [Op.gte]: 6,               // id >= 6
      [Op.lt]: 10,               // id < 10
      [Op.lte]: 10,              // id <= 10
      [Op.ne]: 20,               // id != 20
      [Op.between]: [6, 10],     // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
      [Op.in]: [1, 2],           // IN [1, 2]
      [Op.notIn]: [1, 2],        // NOT IN [1, 2]
      [Op.like]: '%hat',         // LIKE '%hat'
      [Op.notLike]: '%hat',       // NOT LIKE '%hat'
      [Op.iLike]: '%hat',         // ILIKE '%hat' (case insensitive)  (PG only)
      [Op.notILike]: '%hat',      // NOT ILIKE '%hat'  (PG only)
      [Op.overlap]: [1, 2],       // && [1, 2] (PG array overlap operator)
      [Op.contains]: [1, 2],      // @> [1, 2] (PG array contains operator)
      [Op.contained]: [1, 2],     // <@ [1, 2] (PG array contained by operator)
      [Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)
    },
    status: {
      [Op.not]: false           // status NOT FALSE
    }
  }
})
```

##### Manipulating the dataset with limit, offset, order and group

To get more relevant data, you can use limit, offset, order and grouping:

```
// limit the results of the query
Project.findAll({ limit: 10 })

// step over the first 10 elements
Project.findAll({ offset: 10 })

// step over the first 10 elements, and take 2
Project.findAll({ offset: 10, limit: 2 })

```

The syntax for grouping and ordering are equal, so below it is only explained with a single example for group, and the rest for order. Everything you see below can also be done for group

```
Project.findAll({order: [['title', 'DESC']]})
// yields ORDER BY title DESC

Project.findAll({group: 'name'})
// yields GROUP BY name
```

Notice how in the two examples above, the string provided is inserted verbatim into the query, i.e. column names are not escaped. When you provide a string to order/group, this will always be the case. If you want to escape column names, you should provide an array of arguments, even though you only want to order/group by a single column

```
something.findOne({
  order: [
    // will return `name`
    ['name'],
    // will return `username` DESC
    ['username', 'DESC'],
    // will return max(`age`)
    sequelize.fn('max', sequelize.col('age')),
    // will return max(`age`) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],
    // will return otherfunction(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],
    // will return otherfunction(awesomefunction(`col`)) DESC, This nesting is potentially infinite!
    [sequelize.fn('otherfunction', sequelize.fn('awesomefunction', sequelize.col('col'))), 'DESC']
  ]
})
```

To recap, the elements of the order/group array can be the following:

* String - will be quoted
* Array - first element will be quoted, second will be appended verbatim
* Object -
    * Raw will be added verbatim without quoting
    * Everything else is ignored, and if raw is not set, the query will fail
* __Sequelize.fn__ and __Sequelize.col__ returns functions and quoted column names

##### Raw queries

Sometimes you might be expecting a massive dataset that you just want to display, without manipulation. For each row you select, Sequelize creates an instance with functions for update, delete, get associations etc. If you have thousands of rows, this might take some time. If you only need the raw data and don't want to update anything, you can do like this to get the raw data.

```
// Are you expecting a massive dataset from the DB,
// and don't want to spend the time building DAOs for each entry?
// You can pass an extra query option to get the raw data instead:
Project.findAll({ where: { ... }, raw: true })
```
##### count - Count the occurrences of elements in the database
There is also a method for counting database objects:

```
Project.count().then(c => {
  console.log("There are " + c + " projects!")
})

Project.count({ where: {'id': {[Op.gt]: 25}} }).then(c => {
  console.log("There are " + c + " projects with an id greater than 25.")
})
```

##### max - Get the greatest value of a specific attribute within a specific table

And here is a method for getting the max value of an attribute:

```
/*
  Let's assume 3 person objects with an attribute age.
  The first one is 10 years old,
  the second one is 5 years old,
  the third one is 40 years old.
*/
Project.max('age').then(max => {
  // this will return 40
})

Project.max('age', { where: { age: { [Op.lt]: 20 } } }).then(max => {
  // will be 10
})
```

##### min - Get the least value of a specific attribute within a specific table

And here is a method for getting the min value of an attribute:

```
/*
  Let's assume 3 person objects with an attribute age.
  The first one is 10 years old,
  the second one is 5 years old,
  the third one is 40 years old.
*/
Project.min('age').then(min => {
  // this will return 5
})

Project.min('age', { where: { age: { [Op.gt]: 5 } } }).then(min => {
  // will be 10
})
```

##### sum - Sum the value of specific attributes

In order to calculate the sum over a specific column of a table, you can use the sum method.

```
/*
  Let's assume 3 person objects with an attribute age.
  The first one is 10 years old,
  the second one is 5 years old,
  the third one is 40 years old.
*/
Project.sum('age').then(sum => {
  // this will return 55
})

Project.sum('age', { where: { age: { [Op.gt]: 5 } } }).then(sum => {
  // will be 50
})
```

##### Eager loading

 - [Eager loading](http://docs.sequelizejs.com/manual/models-usage.html#eager-loading)

When you are retrieving data from the database there is a fair chance that you also want to get associations with the same query - this is called eager loading. The basic idea behind that, is the use of the attribute include when you are calling find or findAll. Lets assume the following setup:

```
class User extends Model {}
User.init({ name: Sequelize.STRING }, { sequelize, modelName: 'user' })
class Task extends Model {}
Task.init({ name: Sequelize.STRING }, { sequelize, modelName: 'task' })
class Tool extends Model {}
Tool.init({ name: Sequelize.STRING }, { sequelize, modelName: 'tool' })

Task.belongsTo(User)
User.hasMany(Task)
User.hasMany(Tool, { as: 'Instruments' })

sequelize.sync().then(() => {
  // this is where we continue ...
})
```

OK. So, first of all, let's load all tasks with their associated user.

```
Task.findAll({ include: [ User ] }).then(tasks => {
  console.log(JSON.stringify(tasks))

  /*
    [{
      "name": "A Task",
      "id": 1,
      "createdAt": "2013-03-20T20:31:40.000Z",
      "updatedAt": "2013-03-20T20:31:40.000Z",
      "userId": 1,
      "user": {
        "name": "John Doe",
        "id": 1,
        "createdAt": "2013-03-20T20:31:45.000Z",
        "updatedAt": "2013-03-20T20:31:45.000Z"
      }
    }]
  */
})
```

Notice that the accessor (the ```User``` property in the resulting instance) is singular because the association is one-to-something.

Next thing: Loading of data with many-to-something associations!

```
User.findAll({ include: [ Task ] }).then(users => {
  console.log(JSON.stringify(users))

  /*
    [{
      "name": "John Doe",
      "id": 1,
      "createdAt": "2013-03-20T20:31:45.000Z",
      "updatedAt": "2013-03-20T20:31:45.000Z",
      "tasks": [{
        "name": "A Task",
        "id": 1,
        "createdAt": "2013-03-20T20:31:40.000Z",
        "updatedAt": "2013-03-20T20:31:40.000Z",
        "userId": 1
      }]
    }]
  */
})
```

### Querying
 
 - [Querying](http://docs.sequelizejs.com/manual/tutorial/querying.html)

##### Attributes

To select only some attributes, you can use the __attributes__ option. Most often, you pass an array:

```
Model.findAll({
  attributes: ['foo', 'bar']
});
SELECT foo, bar ...
```

Attributes can be renamed using a nested array:

```
Model.findAll({
  attributes: ['foo', ['bar', 'baz']]
});

SELECT foo, bar AS baz ...
```

You can use __sequelize.fn__ to do aggregations:

```

Model.findAll({
  attributes: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
});

SELECT COUNT(hats) AS no_hats ...

```

When using aggregation function, you must give it an alias to be able to access it from the model. In the example above you can get the number of hats with __instance.get('no_hats')__.

Sometimes it may be tiresome to list all the attributes of the model if you only want to add an aggregation:

```
// This is a tiresome way of getting the number of hats...
Model.findAll({
  attributes: ['id', 'foo', 'bar', 'baz', 'quz', [sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
});

// This is shorter, and less error prone because it still works if you add / remove attributes
Model.findAll({
  attributes: { include: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']] }
});
SELECT id, foo, bar, baz, quz, COUNT(hats) AS no_hats ...
```
Similarly, it's also possible to remove a selected few attributes:

```
Model.findAll({
  attributes: { exclude: ['baz'] }
});
SELECT id, foo, bar, quz ...
```

#### Where

Whether you are querying with findAll/find or doing bulk updates/destroys you can pass a ```where``` object to filter the query.

```where``` generally takes an object from attribute:value pairs, where value can be primitives for equality matches or keyed objects for other operators.

It's also possible to generate complex AND/OR conditions by nesting sets of ```or``` and ```and``` ```Operators```.

##### Basics

```
const Op = Sequelize.Op;

Post.findAll({
  where: {
    authorId: 2
  }
});
// SELECT * FROM post WHERE authorId = 2

Post.findAll({
  where: {
    authorId: 12,
    status: 'active'
  }
});
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';

Post.findAll({
  where: {
    [Op.or]: [{authorId: 12}, {authorId: 13}]
  }
});
// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

Post.findAll({
  where: {
    authorId: {
      [Op.or]: [12, 13]
    }
  }
});
// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

Post.destroy({
  where: {
    status: 'inactive'
  }
});
// DELETE FROM post WHERE status = 'inactive';

Post.update({
  updatedAt: null,
}, {
  where: {
    deletedAt: {
      [Op.ne]: null
    }
  }
});
// UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;

Post.findAll({
  where: sequelize.where(sequelize.fn('char_length', sequelize.col('status')), 6)
});
// SELECT * FROM post WHERE char_length(status) = 6;
```

##### Operators

Sequelize exposes symbol operators that can be used for to create more complex comparisons -

```
const Op = Sequelize.Op

[Op.and]: {a: 5}           // AND (a = 5)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
[Op.gt]: 6,                // > 6
[Op.gte]: 6,               // >= 6
[Op.lt]: 10,               // < 10
[Op.lte]: 10,              // <= 10
[Op.ne]: 20,               // != 20
[Op.eq]: 3,                // = 3
[Op.not]: true,            // IS NOT TRUE
[Op.between]: [6, 10],     // BETWEEN 6 AND 10
[Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
[Op.in]: [1, 2],           // IN [1, 2]
[Op.notIn]: [1, 2],        // NOT IN [1, 2]
[Op.like]: '%hat',         // LIKE '%hat'
[Op.notLike]: '%hat'       // NOT LIKE '%hat'
[Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
[Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
[Op.startsWith]: 'hat'     // LIKE 'hat%'
[Op.endsWith]: 'hat'       // LIKE '%hat'
[Op.substring]: 'hat'      // LIKE '%hat%'
[Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
[Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
[Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
[Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
[Op.like]: { [Op.any]: ['cat', 'hat']}
                       // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
[Op.overlap]: [1, 2]       // && [1, 2] (PG array overlap operator)
[Op.contains]: [1, 2]      // @> [1, 2] (PG array contains operator)
[Op.contained]: [1, 2]     // <@ [1, 2] (PG array contained by operator)
[Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

[Op.col]: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example

```

##### Range Operators

Range types can be queried with all supported operators.

Keep in mind, the provided range value can ```define the bound inclusion/exclusion``` as well.

```
// All the above equality and inequality operators plus the following:

[Op.contains]: 2           // @> '2'::integer (PG range contains element operator)
[Op.contains]: [1, 2]      // @> [1, 2) (PG range contains range operator)
[Op.contained]: [1, 2]     // <@ [1, 2) (PG range is contained by operator)
[Op.overlap]: [1, 2]       // && [1, 2) (PG range overlap (have points in common) operator)
[Op.adjacent]: [1, 2]      // -|- [1, 2) (PG range is adjacent to operator)
[Op.strictLeft]: [1, 2]    // << [1, 2) (PG range strictly left of operator)
[Op.strictRight]: [1, 2]   // >> [1, 2) (PG range strictly right of operator)
[Op.noExtendRight]: [1, 2] // &< [1, 2) (PG range does not extend to the right of operator)
[Op.noExtendLeft]: [1, 2]  // &> [1, 2) (PG range does not extend to the left of operator)

```

##### Combinations

```
const Op = Sequelize.Op;

{
  rank: {
    [Op.or]: {
      [Op.lt]: 1000,
      [Op.eq]: null
    }
  }
}
// rank < 1000 OR rank IS NULL

{
  createdAt: {
    [Op.lt]: new Date(),
    [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
  }
}
// createdAt < [timestamp] AND createdAt > [timestamp]

{
  [Op.or]: [
    {
      title: {
        [Op.like]: 'Boat%'
      }
    },
    {
      description: {
        [Op.like]: '%boat%'
      }
    }
  ]
}
// title LIKE 'Boat%' OR description LIKE '%boat%'
```

##### Pagination / Limiting

```
// Fetch 10 instances/rows
Project.findAll({ limit: 10 })

// Skip 8 instances/rows
Project.findAll({ offset: 8 })

// Skip 5 instances and fetch the 5 after that
Project.findAll({ offset: 5, limit: 5 })
```

##### Ordering

```order``` takes an array of items to order the query by or a sequelize method. Generally you will want to use a tuple/array of either attribute, direction or just direction to ensure proper escaping.

```
Subtask.findAll({
  order: [
    // Will escape title and validate DESC against a list of valid direction parameters
    ['title', 'DESC'],

    // Will order by max(age)
    sequelize.fn('max', sequelize.col('age')),

    // Will order by max(age) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],

    // Will order by  otherfunction(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],

    // Will order an associated model's created_at using the model name as the association's name.
    [Task, 'createdAt', 'DESC'],

    // Will order through an associated model's created_at using the model names as the associations' names.
    [Task, Project, 'createdAt', 'DESC'],

    // Will order by an associated model's created_at using the name of the association.
    ['Task', 'createdAt', 'DESC'],

    // Will order by a nested associated model's created_at using the names of the associations.
    ['Task', 'Project', 'createdAt', 'DESC'],

    // Will order by an associated model's created_at using an association object. (preferred method)
    [Subtask.associations.Task, 'createdAt', 'DESC'],

    // Will order by a nested associated model's created_at using association objects. (preferred method)
    [Subtask.associations.Task, Task.associations.Project, 'createdAt', 'DESC'],

    // Will order by an associated model's created_at using a simple association object.
    [{model: Task, as: 'Task'}, 'createdAt', 'DESC'],

    // Will order by a nested associated model's created_at simple association objects.
    [{model: Task, as: 'Task'}, {model: Project, as: 'Project'}, 'createdAt', 'DESC']
  ]

  // Will order by max age descending
  order: sequelize.literal('max(age) DESC')

  // Will order by max age ascending assuming ascending is the default order when direction is omitted
  order: sequelize.fn('max', sequelize.col('age'))

  // Will order by age ascending assuming ascending is the default order when direction is omitted
  order: sequelize.col('age')

  // Will order randomly based on the dialect (instead of fn('RAND') or fn('RANDOM'))
  order: sequelize.random()
})
```

### Instances

- [Instances](http://docs.sequelizejs.com/manual/tutorial/instances.html)

##### Building a non-persistent instance

In order to create instances of defined classes just do as follows. You might recognize the syntax if you coded Ruby in the past. Using the ```build```-method will return an unsaved object, which you explicitly have to save.

```
const project = Project.build({
  title: 'my awesome project',
  description: 'woot woot. this will make me a rich man'
})

const task = Task.build({
  title: 'specify the project idea',
  description: 'bla',
  deadline: new Date()
})
```

Built instances will automatically get default values when they were defined:

```
// first define the model
class Task extends Model {}
Task.init({
  title: Sequelize.STRING,
  rating: { type: Sequelize.TINYINT, defaultValue: 3 }
}, { sequelize, modelName: 'task' });

// now instantiate an object
const task = Task.build({title: 'very important task'})

task.title  // ==> 'very important task'
task.rating // ==> 3
```

To get it stored in the database, use the ```save``` -method and catch the events ... if needed:

```
project.save().then(() => {
  // my nice callback stuff
})

task.save().catch(error => {
  // mhhh, wth!
})

// you can also build, save and access the object with chaining:
Task
  .build({ title: 'foo', description: 'bar', deadline: new Date() })
  .save()
  .then(anotherTask => {
    // you can now access the currently saved task with the variable anotherTask... nice!
  })
  .catch(error => {
    // Ooops, do some error-handling
  })
```

#### Creating persistent instances

While an instance created with ```.build()``` requires an explicit ```.save()``` call to be stored in the database, ```.create()``` omits that requirement altogether and automatically stores your instance's data once called.

```
Task.create({ title: 'foo', description: 'bar', deadline: new Date() }).then(task => {
  // you can now access the newly created task via the variable task
})
```

It is also possible to define which attributes can be set via the create method. This can be especially very handy if you create database entries based on a form which can be filled by a user. Using that would for example allow you to restrict the User model to set only a username and an address but not an admin flag:

```
User.create({ username: 'barfooz', isAdmin: true }, { fields: [ 'username' ] }).then(user => {
  // let's assume the default of isAdmin is false:
  console.log(user.get({
    plain: true
  })) // => { username: 'barfooz', isAdmin: false }
})
```

#### Updating / Saving / Persisting an instance

Now lets change some values and save changes to the database... There are two ways to do that:

```
// way 1
task.title = 'a very different title now'
task.save().then(() => {})

// way 2
task.update({
  title: 'a very different title now'
}).then(() => {})
```

It's also possible to define which attributes should be saved when calling save, by passing an array of column names. This is useful when you set attributes based on a previously defined object. E.g. if you get the values of an object via a form of a web app. Furthermore this is used internally for update. This is how it looks like:

```
task.title = 'foooo'
task.description = 'baaaaaar'
task.save({fields: ['title']}).then(() => {
 // title will now be 'foooo' but description is the very same as before
})

// The equivalent call using update looks like this:
task.update({ title: 'foooo', description: 'baaaaaar'}, {fields: ['title']}).then(() => {
 // title will now be 'foooo' but description is the very same as before
})
```

When you call save without changing any attribute, this method will execute nothing;

#### Destroying / Deleting persistent instances

Once you created an object and got a reference to it, you can delete it from the database. The relevant method is ```destroy```:

```
Task.create({ title: 'a task' }).then(task => {
  // now you see me...
  return task.destroy();
}).then(() => {
 // now i'm gone :)
})
```

If the ```paranoid``` options is true, the object will not be deleted, instead the ```deletedAt``` column will be set to the current timestamp. To force the deletion, you can pass ```force: true``` to the destroy call:

```
task.destroy({ force: true })
```

After an object is soft deleted in ```paranoid``` mode, you will not be able to create a new instance with the same primary key until you have force-deleted the old instance.


##### Restoring soft-deleted instances

If you have soft-deleted an instance of a model with ```paranoid: true```, and would like to undo the deletion, use the ```restore``` method:

```
Task.create({ title: 'a task' }).then(task => {
  // now you see me...
  return task.destroy();
}).then(() => {
  // now i'm gone, but wait...
  return task.restore();
})
```

##### Working in bulk (creating, updating and destroying multiple rows at once)

In addition to updating a single instance, you can also create, update, and delete multiple instances at once. The functions you are looking for are called

``` * Model.bulkCreate ```

``` * Model.update ```

``` * Model.destroy ```

Since you are working with multiple models, the callbacks will not return DAO instances. BulkCreate will return an array of model instances/DAOs, they will however, unlike ```create```, not have the resulting values of autoIncrement attributes.```update``` and ```destroy``` will return the number of affected rows.

First lets look at bulkCreate
```
User.bulkCreate([
  { username: 'barfooz', isAdmin: true },
  { username: 'foo', isAdmin: true },
  { username: 'bar', isAdmin: false }
]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
  return User.findAll();
}).then(users => {
  console.log(users) // ... in order to get the array of user objects
})
```

To update several rows at once:

```
Task.bulkCreate([
  {subject: 'programming', status: 'executing'},
  {subject: 'reading', status: 'executing'},
  {subject: 'programming', status: 'finished'}
]).then(() => {
  return Task.update(
    { status: 'inactive' }, /* set attributes' value */
    { where: { subject: 'programming' }} /* where criteria */
  );
}).then(([affectedCount, affectedRows]) => {
  // Notice that affectedRows will only be defined in dialects which support returning: true

  // affectedCount will be 2
  return Task.findAll();
}).then(tasks => {
  console.log(tasks) // the 'programming' tasks will both have a status of 'inactive'
})
```
And delete them:

```
Task.bulkCreate([
  {subject: 'programming', status: 'executing'},
  {subject: 'reading', status: 'executing'},
  {subject: 'programming', status: 'finished'}
]).then(() => {
  return Task.destroy({
    where: {
      subject: 'programming'
    },
    truncate: true /* this will ignore where and truncate the table instead */
  });
}).then(affectedRows => {
  // affectedRows will be 2
  return Task.findAll();
}).then(tasks => {
  console.log(tasks) // no programming, just reading :(
})
```

If you are accepting values directly from the user, it might be beneficial to limit the columns that you want to actually insert.```bulkCreate()``` accepts an options object as the second parameter. The object can have a .```fields.``` parameter, (an array) to let it know which fields you want to build explicitly

```
User.bulkCreate([
  { username: 'foo' },
  { username: 'bar', admin: true}
], { fields: ['username'] }).then(() => {
  // nope bar, you can't be admin!
})
```

```bulkCreate``` was originally made to be a mainstream/fast way of inserting records, however, sometimes you want the luxury of being able to insert multiple rows at once without sacrificing model validations even when you explicitly tell Sequelize which columns to sift through. You can do by adding a ```validate: true``` property to the options object.

```
class Tasks extends Model {}
Tasks.init({
  name: {
    type: Sequelize.STRING,
    validate: {
      notNull: { args: true, msg: 'name cannot be null' }
    }
  },
  code: {
    type: Sequelize.STRING,
    validate: {
      len: [3, 10]
    }
  }
}, { sequelize, modelName: 'tasks' })

Tasks.bulkCreate([
  {name: 'foo', code: '123'},
  {code: '1234'},
  {name: 'bar', code: '1'}
], { validate: true }).catch(errors => {
  /* console.log(errors) would look like:
  [
    { record:
    ...
    name: 'SequelizeBulkRecordError',
    message: 'Validation error',
    errors:
      { name: 'SequelizeValidationError',
        message: 'Validation error',
        errors: [Object] } },
    { record:
      ...
      name: 'SequelizeBulkRecordError',
      message: 'Validation error',
      errors:
        { name: 'SequelizeValidationError',
        message: 'Validation error',
        errors: [Object] } }
  ]
  */
})
```

##### Values of an instance

If you log an instance you will notice, that there is a lot of additional stuff. In order to hide such stuff and reduce it to the very interesting information, you can use the ```get```-attribute. Calling it with the option ```plain``` = true will only return the values of an instance.

```
Person.create({
  name: 'Rambow',
  firstname: 'John'
}).then(john => {
  console.log(john.get({
    plain: true
  }))
})

// result:

// { name: 'Rambow',
//   firstname: 'John',
//   id: 1,
//   createdAt: Tue, 01 May 2012 19:12:16 GMT,
//   updatedAt: Tue, 01 May 2012 19:12:16 GMT
// }
```

Hint:You can also transform an instance into JSON by using ```JSON.stringify(instance)```. This will basically return the very same as values.

### Associations

- [Associations](http://docs.sequelizejs.com/manual/tutorial/associations.html)

- [Associations - Reference](http://docs.sequelizejs.com/class/lib/associations/base.js~Association.html)

This section describes the various association types in sequelize. There are four type of associations available in Sequelize

- BelongsTo
- HasOne
- HasMany
- BelongsToMany

#### One-To-One associations

When calling a method such as ```Customer.hasOne(Address)```, we say that the Customer model is the __source__ and the Address model is the __target__.

We define 2 models:

```
Customer = sequelize.define('customer', {
  /* attributes */
})

Address = sequelize.define('address', {
  /* attributes */
})
```

How to create One-to-One association between them?
Sequelize provides 2 ways:

__belongsTo__

```
Address.belongsTo(Customer) // Will add a customerId attribute to Address to hold the primary key value for Customer
```

__hasOne__

```
Customer.hasOne(Address); // Will add an attribute customerId to the Address model.
```

What is difference between __belongsTo__ and __hasOne__?

__hasOne__ inserts the association key in target model whereas __BelongsTo__ inserts the association key in the source model.

We can create a solution by combine ```foreignKey``` and ```targetKey``` with ```belongsTo``` and ```hasOne``` relation as below code:

```
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
  })

  Customer.associate = function (models) {
    models.customer.hasOne(models.address, {foreignKey: 'fk_customerid', targetKey: 'uuid'});
  }

  return Customer;
};


module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('address', {
  })

  Address.associate = function (models) {
    models.address.belongsTo(models.customer, {foreignKey: 'fk_customerid', targetKey: 'uuid'});
  }

  return Address;
};
```

__Foreign Key__

– In __belongsTo__ relation, foreign key will be generated from the target model name and the target primary key name. Sequelize provides a ```foreignKey``` option to override defaultValue.

__Target Key__

– The target key is the column on the target model that the foreign key column on the source model points to. In __belongsTo__ relation, by default the target key will be the target model’s primary key. Sequelize provides a ```targetKey``` option to define a custom column.


__How to save it?__

```
var customer;
Customer.create({ 
	firstname: 'Jack',
	...
	}).then(createdCustomer => {		
		// Send created customer to client
		customer = createdCustomer;
		
		return Address.create({
			street: 'W NORMA ST',
			...
		})
	}).then(address => {
		customer.setAddress(address)
	})
};
```

__How to fetch entities?__

Way to get all Customers that includes Addresses:

```
Customer.findAll({
	attributes: [['uuid', 'customerId'], ['firstname', 'name'], 'age'],
	include: [{
		model: Address,
		where: { fk_customerid: db.Sequelize.col('customer.uuid') },
		attributes: ['street', 'phone']
	}]
}).then(customers => {
   console.log(customers);
});
```

With ```attributes``` option, we can select only some attributes:

```
Customer.findAll({
    attributes: ['uuid', 'firstname', 'age']
});
```

And ```attributes``` can be renamed using a nested array:

```
// 'uuid, firstname' can be renamed to 'customerId, name' as below:
 
Customer.findAll({
    attributes: [['uuid', 'customerId'], ['firstname', 'name'], 'age']
});
```

And ```attributes``` can be renamed using a nested array:

```
// 'uuid, firstname' can be renamed to 'customerId, name' as below:

Customer.findAll({
    attributes: [['uuid', 'customerId'], ['firstname', 'name'], 'age']
});
```

#### Example

##### Define Sequelize models

Customer model

```
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
  })

  Customer.associate = function (models) {
    models.customer.hasOne(models.address, {foreignKey: 'fk_customerid', targetKey: 'uuid'});
  }

  return Customer;
};

```

Address model

```
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('address', {
    street: DataTypes.STRING,
    phone: DataTypes.STRING
  })

  Address.associate = function (models) {
    models.address.belongsTo(models.customer, {foreignKey: 'fk_customerid', targetKey: 'uuid'});
  }

  return Address;
};  
```

##### Express RestAPIs

```
var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

router.post('/init', function (req, res) {
	var customer;
	models.customer.create({
		//customerid: db.sequelize.Utils.generateUUID(),
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age
	}).then(createdCustomer => {
		// Send created customer to client
		customer = createdCustomer;

		return models.address.create({
			street: req.body.street,
			phone: req.body.phone
		})
	}).then(address => {
		customer.setAddress(address)
		res.send('OK');
	})
});

router.get('/all', function (req, res) {

	models.customer.findAll({
		attributes: [
			['uuid', 'customerId'],
			['firstname', 'name'], 'age'
		],
		include: [{
			model: models.address,
			where: {
				fk_customerid: Sequelize.col('customer.uuid')
			},
			attributes: ['street', 'phone']
		}]
	}).then(customers => {
		res.send(customers);
	});

});



module.exports = router;
```


##### App.js

```
var app = express();

const oneToOne  = require('./routes/oneToOne');

app.use('/oneToOne', oneToOne);
```

– POST customers:

![Postman](../../assets/1_1_postman.PNG)

Database after do POST:

![Address DB](../../assets/1_1_address_bd.PNG)

![Customer DB](../../assets/1_1_customer_bd.PNG)


```
Executing (default): INSERT INTO `customers` (`uuid`,`firstname`,`lastname`,`age`,`createdAt`,`updatedAt`) VALUES ('1ec93490-2f07-11e9-9538-29377f244a63','Lucas','Sartori',21,'2019-02-12 20:45:23','2019-02-12 20:45:23');
Executing (default): INSERT INTO `addresses` (`id`,`street`,`phone`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'6 e/44 y 43','221','2019-02-12 20:45:24','2019-02-12 20:45:24');
Executing (default): SELECT `id`, `street`, `phone`, `createdAt`, `updatedAt`, `fk_customerid` FROM `addresses` AS `address` WHERE `address`.`fk_customerid` = '1ec93490-2f07-11e9-9538-29377f244a63' LIMIT 1;
```

– Find All Customers:

![All Postman 1_1](../../assets/1_1_all_postman.PNG)


#### One-To-Many associations (hasMany)

One-To-Many associations are connecting one source with multiple targets. But the targets are connected to only one source.

```
Company = sequelize.define('company', 
      {/* attributes */
})


Product = sequelize.define('product', 
      {/* attributes */
})

Company.hasMany(Product)
```

The above code will add the attribute companyId to Product. Instances of Company has accessors ```getProducts``` and ```setProducts```.

We can use ```sourceKey``` option to associate records on different columns:

```
  const Company = sequelize.define('company', {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
  
    
    return Company;
  };

  const Product = sequelize.define('product', {
    /*attributes*/

    return Product;
  };

 Company.hasMany(Product, {foreignKey: 'companyId', sourceKey: 'id'})
 Product.belongsTo(Company, {foreignKey: 'companyId', targetKey: 'id'});
```

__How to persist one-to-many objects to database?__

```
// Apple company
Company.create({ 
	name: 'Apple', 
	street: 'Cupertino, CA 95014', 
	phone: '1-408-996-1010',
	products: [
		// IPhone 7 
		{
			/*
				attributes
			*/
		},
		// IPadPro
		{
			/*
				attributes
			*/
		}
	]
}, {
	include: [ Product ]
})
```

__How to persist one-to-many objects to database?__

```
// Apple company
Company.create({ 
	name: 'Apple', 
	street: 'Cupertino, CA 95014', 
	phone: '1-408-996-1010',
	products: [
		// IPhone 7 
		{
			/*
				attributes
			*/
		},
		// IPadPro
		{
			/*
				attributes
			*/
		}
	]
}, {
	include: [ Product ]
})
```

__How to fetch all Companies (include Products)?__

```
Company.findAll({
	attributes: [['uuid', 'companyId'], 'name', 'street', 'phone'],
	include: [{
		model: Product,
		where: { fk_companyid: db.Sequelize.col('company.uuid') },
		attributes: ['code', 'name', 'details']
	}]
})
```

With ```attributes``` option, we can select only some attributes:

```
Company.findAll({
	attributes: ['uuid', 'name', 'street', 'phone']
});
```

And attributes can be renamed using a nested array:

```
// 'uuid' can be renamed to 'companyId' as below:

Company.findAll({
	attributes: [['uuid', 'companyId'], 'name', 'street', 'phone'],
});
```

#### Example

##### Define Sequelize models

Company model:

```
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    phone: DataTypes.STRING
  });

  Company.associate = function (models) {
    models.company.hasMany(models.product, {
      foreignKey: 'companyId',
      sourceKey: 'id'
    })
  }

  return Company;
};
```

Product model:

```
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('product', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    details: DataTypes.STRING
  });

  Product.associate = function (models) {
    models.product.belongsTo(models.company, {foreignKey: 'companyId', targetKey: 'id'});
  }

  return Product;
};
```

##### Express RestAPIs

```
var models = require('../models');
var router = express.Router();

router.get('/init', function (req, res) {

	// Apple company
	models.company.create({
		name: 'Apple',
		street: 'Cupertino, CA 95014',
		phone: '1-408-996-1010',
		products: [{
				code: "A-123",
				name: "Iphone7",
				details: "Price: 649.00 USD & FREE shipping"
			},
			{
				code: "A-456",
				name: "IPadPro",
				details: "Price: 417.67 USD & FREE shipping"
			}
		]
	}, {
		include: [models.product]
	}).then(() => {

		console.log("-----------> Apple is created");

		models.company.create({
			name: 'Samsung',
			street: 'Seocho District, Seoul, South Korea',
			phone: '+82-2-2053-3000',
			products: [{
					code: "S-012",
					name: "GalaxyJ7",
					details: "Price: 219.00 USD & FREE shipping"
				},
				{
					code: "S-456",
					name: "GalaxyTabA",
					details: "Price: 299.99 USD & FREE shipping"
				}
			]
		}, {
			include: [models.product]
		}).then(() => {
			console.log("-----------> Samsung is created");
		})
	}).then(() => {
		res.send("Done!");
	})
});

router.get('/all', function (req, res) {

	models.company.findAll({
		attributes: [['id', 'companyId'], 'name', 'street', 'phone'],
		include: [{
			model: Product,
			// where: { companyId },
			attributes: ['code', 'name', 'details']
		}]
	}).then(function (companies) {

	   res.send(companies);
	});


});


module.exports = router;
```


##### App.js

```
var app = express();

const oneToMany  = require('./routes/oneToMany');

app.use('/oneToMany', oneToMany);
```
Make an initial data request:
```
http://localhost:3000/oneToMany/init
```

![Tables DB](../../assets/1_N_tables.PNG)

```
Executing (default): INSERT INTO `companies` (`id`,`name`,`street`,`phone`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'Apple','Cupertino, CA 95014','1-408-996-1010','2019-02-13 13:29:03','2019-02-13 13:29:03');
Executing (default): INSERT INTO `products` (`id`,`code`,`name`,`details`,`createdAt`,`updatedAt`,`companyId`) VALUES (DEFAULT,'A-123','Iphone7','Price: 649.00 USD & FREE shipping','2019-02-13 13:29:03','2019-02-13 13:29:03',1);
Executing (default): INSERT INTO `products` (`id`,`code`,`name`,`details`,`createdAt`,`updatedAt`,`companyId`) VALUES (DEFAULT,'A-456','IPadPro','Price: 417.67 USD & FREE shipping','2019-02-13 13:29:03','2019-02-13 13:29:03',1);
-----------> Apple is created
Executing (default): INSERT INTO `companies` (`id`,`name`,`street`,`phone`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'Samsung','Seocho District, Seoul, South Korea','+82-2-2053-3000','2019-02-13 13:29:03','2019-02-13 13:29:03');
GET /oneToMany/init 200 336.671 ms - 5
Executing (default): INSERT INTO `products` (`id`,`code`,`name`,`details`,`createdAt`,`updatedAt`,`companyId`) VALUES (DEFAULT,'S-012','GalaxyJ7','Price: 219.00 USD & FREE shipping','2019-02-13 13:29:03','2019-02-13 13:29:03',2);
Executing (default): INSERT INTO `products` (`id`,`code`,`name`,`details`,`createdAt`,`updatedAt`,`companyId`) VALUES (DEFAULT,'S-456','GalaxyTabA','Price: 299.99 USD & FREE shipping','2019-02-13 13:29:03','2019-02-13 13:29:03',2);
-----------> Samsung is created
```

![Company DB](../../assets/1_N_company_bd.PNG)

![Product DB](../../assets/1_N_product_bd.PNG)

Get all Companies, include Products:

```
http://localhost:3000/oneToMany/all
```

```
Executing (default): SELECT `company`.`id`, `company`.`id` AS `companyId`, `company`.`name`, `company`.`street`, `company`.`phone`, `products`.`id` AS `products.id`, `products`.`code` AS `products.code`, `products`.`name` AS `products.name`, `products`.`details` AS `products.details` FROM
`companies` AS `company` LEFT OUTER JOIN `products` AS `products` ON `company`.`id` = `products`.`companyId`;
GET /oneToMany/all 200 24.987 ms - 544
```

![All Postman 1_N](../../assets/1_N_postman.PNG)


#### Sequelize Many-To-Many

When calling a method such as ```Project.belongsToMany(User, {through: 'UserProject'})```, we say that the Project model is the __source__ and the User model is the __target__.

We define 2 models:

```
Project = sequelize.define('project', {
  /* attributes */
});

Person = sequelize.define('person', {
  /* attributes */
});
```

Many-To-Many associations are used to connect sources with multiple targets. And the targets can also have connections to multiple sources.

```
Project.belongsToMany(Person, { through: 'PersonProject' });
Person.belongsToMany(Project, { through: 'PersonProject' });
```

A new model UserProject will be created with projectId and userId.

```through``` is required. Sequelize will create accessors for both Project and User instances: ```getUsers```, ```setUsers```, ```addUser```, ```addUsers``` to Project, and ```getProjects```, ```setProjects```, ```addProject```, and ```addProjects``` to User.

To modify the name of models in associations, we can use the alias with ```as``` option:

```
Project.belongsToMany(Person, { as: 'Workers', through: 'worker_tasks', foreignKey: 'projectId', otherKey: 'personId'});
Person.belongsToMany(Project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'personId', otherKey: 'projectId'});
```

```foreignKey``` is used to set source model key in the through relation.
```otherKey``` is used to set target model key in the through relation.

![N_M Tables DB](../../assets/N_M_tables_bd.PNG)

__How to persist many-to-many entities into database?__

```

Person.create({
		firstname: "Jack",
		lastname: "Davis",
		age: 37		
	}).then(jack => {
			let people = [jack];
			
			return Person.create({
				firstname: "Mary",
				lastname: "Taylor",
				age: 21
			}).then(mary => {
				people.push(mary);
				return people;
			})
	}).then(people => {
		Project.create({
			code: 'P-123',
			name: 'JSA - Branding Development'
		}).then(p123 => {
			p123.setWorkers(people);
		})
		
		Project.create({
			code: 'P-456',
			name: 'JSA - DataEntry Development'
		}).then(p456 => {
			p456.setWorkers(people);
		})
	}).then(() => {
		res.send("OK");
	});
```

__How to retrieve all entities?__

With Belongs-To-Many you can query based on through relation by using ```through``` option and select specific ```attributes``` by using attributes option.

```
Project.findAll({
		attributes: ['code', 'name'],
		include: [{
			model: Person, as: 'Workers',
			attributes: [['firstname', 'name'], 'age'],
			through: {
				attributes: ['projectId', 'personId'],
			}
		  }]
	}).then(projects => {
	   res.send(projects);
	});
```

#### Example

##### Define Sequelize models

- Project model:

```
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('project', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
  });

  Project.associate = function (models) {
    models.project.belongsToMany(models.person, { as: 'Workers', through: 'worker_tasks', foreignKey: 'projectId', otherKey: 'personId'});
  }

  return Project;
};
```

– Person model:

```
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('person', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.STRING,
  });
  
  Person.associate = function(models) {
    models.person.belongsToMany(models.project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'personId', otherKey: 'projectId'});
  }
    
  
  return Person;
};
```

##### Express RestAPIs

```
var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/init', function (req, res) {
  models.person.create({
		firstname: "Jack",
		lastname: "Davis",
		age: 37		
	}).then(jack => {
			let people = [jack];
			
			return models.person.create({
				firstname: "Mary",
				lastname: "Taylor",
				age: 21
			}).then(mary => {
				people.push(mary);
				return people;
			})
	}).then(people => {
		models.project.create({
			code: 'P-123',
			name: 'JSA - Branding Development'
		}).then(p123 => {
			p123.setWorkers(people);
		})
		
		models.project.create({
			code: 'P-456',
			name: 'JSA - DataEntry Development'
		}).then(p456 => {
			p456.setWorkers(people);
		})
	}).then(() => {
		res.send("OK");
	});
});

router.get('/all', function (req, res) {
  models.project.findAll({
		attributes: ['code', 'name'],
		include: [{
			model: models.person, as: 'Workers',
			attributes: [['firstname', 'name'], 'age'],
			through: {
				attributes: ['projectId', 'personId'],
			}
		  }]
	}).then(projects => {
	   res.send(projects);
	});
});



module.exports = router;
```

##### App.js

```
var app = express();
var manyToMany  = require('./routes/manyToMany');

app.use('/manyToMany', manyToMany);
```

__Initial data__

Request:

```
http://localhost:3000/manyToMany/init
```

Logs:
```
Executing (default): INSERT INTO `projects` (`id`,`code`,`name`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'P-456','JSA - DataEntry Development','2019-02-13 18:15:09','2019-02-13 18:15:09');
Executing (default): SELECT `createdAt`, `updatedAt`, `personId`, `projectId` FROM `worker_tasks` AS `worker_tasks` WHERE `worker_tasks`.`projectId` = 1;
Executing (default): SELECT `createdAt`, `updatedAt`, `personId`, `projectId` FROM `worker_tasks` AS `worker_tasks` WHERE `worker_tasks`.`projectId` = 2;
Executing (default): INSERT INTO `worker_tasks` (`personId`,`projectId`,`createdAt`,`updatedAt`) VALUES (1,2,'2019-02-13 18:15:09','2019-02-13 18:15:09'),(2,2,'2019-02-13 18:15:09','2019-02-13 18:15:09');
Executing (default): INSERT INTO `worker_tasks` (`personId`,`projectId`,`createdAt`,`updatedAt`) VALUES (1,1,'2019-02-13 18:15:09','2019-02-13 18:15:09'),(2,1,'2019-02-13 18:15:09','2019-02-13 18:15:09');
```

Results:

![Peope Table](../../assets/N_M_people_bd.PNG)

![Projects Table](../../assets/N_M_projects.PNG)

![Work Tasks Table](../../assets/N_M_work_tasks_bd.PNG)

__Fetch all entities__

Request:

```
http://localhost:3000/manyToMany/all
```

Logs:

```
Executing (default): SELECT `project`.`id`, `project`.`code`, `project`.`name`, `Workers`.`id` AS `Workers.id`, `Workers`.`firstname` AS `Workers.name`, `Workers`.`age` AS `Workers.age`, `Workers.worker_tasks`.`createdAt` AS `Workers.worker_tasks.createdAt`, `Workers.worker_tasks`.`updatedAt` AS `Workers.worker_tasks.updatedAt`, `Workers.worker_tasks`.`personId` AS `Workers.worker_tasks.personId`, `Workers.worker_tasks`.`projectId` AS `Workers.worker_tasks.projectId` FROM `projects` AS `project` LEFT OUTER JOIN (`worker_tasks` AS `Workers.worker_tasks` INNER JOIN `people` AS `Workers` ON `Workers`.`id` = `Workers.worker_tasks`.`personId`) ON `project`.`id` = `Workers.worker_tasks`.`projectId`;
```

Result:

```
[
    {
        "code": "P-123",
        "name": "JSA - Branding Development",
        "Workers": [
            {
                "name": "Jack",
                "age": "37",
                "worker_tasks": {
                    "projectId": 1,
                    "personId": 1
                }
            },
            {
                "name": "Mary",
                "age": "21",
                "worker_tasks": {
                    "projectId": 1,
                    "personId": 2
                }
            }
        ]
    },
    {
        "code": "P-456",
        "name": "JSA - DataEntry Development",
        "Workers": [
            {
                "name": "Jack",
                "age": "37",
                "worker_tasks": {
                    "projectId": 2,
                    "personId": 1
                }
            },
            {
                "name": "Mary",
                "age": "21",
                "worker_tasks": {
                    "projectId": 2,
                    "personId": 2
                }
            }
        ]
    }
]
```
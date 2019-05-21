## Knowing npm
#### What is npm and what are packages?

The letters ```npm``` stand for “node package manager”. When you are working on a JavaScript project, you can use npm to install other people’s code packages into your own project. Your project might be a web project like a website or web app, or it could be a server-side project using node. Any JavaScript project can use npm to pull in packages of existing code.

npm is a tool you install on your computer. It’s part of node, so [install the LTS version of Node](https://nodejs.org/en/) to get both the ```node``` and ```npm``` commands in your command line. It must be installed on every computer where you want to work on your project, so if you move your files around using a USB drive don’t forget that part!

You use npm from the command line to install, uninstall or update packages. By “package” I mean any piece of code which someone has chosen to publish on npm.

Some examples of npm packages are:

Angular<br>
React<br>
jQuery<br>
Express<br>
Socket.io

There are thousands of packages published on npm. You can browse them on [npmjs.com](https://www.npmjs.com/), but usually you will find recommended packages by searching on Google or following blog posts. Some packages are only suitable for web projects, and some are only suitable for node projects.

#### Using npm in a project
To use npm packages in a project, your project must contain a file called package.json. This file keeps a list of all the packages you are using, and which version of each one you have chosen to use.

##### If your file does not have a package.json 
then you can create one from the command line by running npm init inside your project.

```
cd example-project
npm init
```
or 

Generate it without having it ask any questions:

```
$ mkdir my-npm-pkg && cd my-npm-pkg
$ npm init -y
```

#### Installing packages

Each time you open your project on a different computer, you may have to reinstall all your packages. This is especially true if you are moving between Mac and Windows. This is because not all packages are cross-compatible, and sometimes need a version downloaded for the specific system you are using it on.

When you open a project for the first time or on a different computer, reinstall all your packages:

```
cd example-project
npm install
or
npm i
```

After running ```npm install``` there will be a new folder in your project called ```node_modules```. This folder contains all the code for all the packages you have installed. It also contains all that packages that your packages installed. It can get pretty big.

Here’s a programmer joke you can now consider yourself “in on”:

image_node_modules

![node_modules](./assets/image_node_modules.jpeg)

To install a new package, use the command ```npm install``` followed by the name of the package. Include the ```--save``` flag to ensure the library is added to your ```package.json``` so you can install or update it again later:

```
npm install that-cool-thing --save
```

If everything explodes and you don’t understand the errors and you don’t know what to do, first try deleting your ```node_modules``` folder and then running a fresh npm install. You’ll get the hang of it, don’t panic!

#### Basic NPM Commands

##### Installing packages:

__Locally__: A locally installed package can be accessed only on the folder you’ve downloaded it.

The node_modules is the folder in which our local packages are installed. There will be a new file named package-lock.json. This file contains the exact version of the package, unlike package.json which contains the semantic version

You can also install packages as a developer dependency i.e., these packages are only needed for development. For example, they can be any package for testing the project. To install packages as a developer dependency use the command

```
npm install <package_name> --save-dev
or
npm i -D <package_name>
```

__Globally__: A globally installed packages works anywhere on the machine. To install global packages you’ve to use -g flag.

Generally, any packages you use in your project have to be installed locally. And packages you use in the command line are to be installed globally.

The command for the local and global packages are same except that you have to use -g flag for global packages.


##### Updating packages:

Since we have installed packages sometimes we need to update our packages to get new features. To do that, you’ve to use

```
npm update <package_name>
```

for a specific package (or) just

```
npm update
```

to update all packages.

For global packages, you’ve to use -g.

```
npm update <package_name> -g
```


##### Uninstalling packages:

Sometimes you don’t need a particular package and you want to remove it. It’s not a good idea to manually remove the package from the node_modules folder as it can be a dependency for the other packages. So, to safely remove a package you’ve to use the command

```
npm uninstall <package_name>
```

For global packages,

```
npm uninstall <package_name> -g
```

##### Installing from package.json:

If you want to share your project then you may not want to share all your node modules. So, you will be sharing only your package.json which contains the packages needed for your project. And also If you want to contribute to some others project then you need to download the project and install packages in it. To do that, you have to use the command

```
npm install

or

npm i
```

##### List of installed packages:

To get the list of installed packages, use the command

```
npm list
```

#### Semantic versioning:

![Semantic versioning npm](./assets/semantic_versioning_npm.jpeg)


All the package versions are represented with three digits. The first digit is major, second is minor and third is patch(see fig).

patch(~) is updated for bug fixes. You can update patch from the command

minor(^) is updated for every new functionality that doesn’t break the existing code.

major is updated for big changes. These generally break the existing code.

In the package.json, when you install a package, you will see a caret(^) symbol by default. This indicates that when a user is downloading your project, the package will be updated to the latest minor version. Same applies to patch. If we don’t include any symbol then exact version is downloaded. To get the latest major version, asterisk(*) is used. But you don’t want to do this as the major version can break your code.

To install either major, minor, patch (or) exact version, you can use the command

```
npm install <package_name>@x.y.z
```

#### Getting help:

npm CLI has built -n help command. You can access it by

```
npm help
```

To get help for a particular command, use the command

```
npm <command> -h
```

You can also search npm documentation for help. To do that use

```
npm help-search <command>
```

#### What are NPM Scripts?

NPM scripts are, well, scripts. We use scripts to automate repetitive tasks. For example, building your project, minifying Cascading Style Sheets (CSS) and JavaScript (JS) files. Scripts are also used in deleting temporary files and folders, etc,. There are many ways to pull this off — you could write bash/batch scripts, or use a task runner like Gulp or Grunt. However, a lot of people are moving over to NPM scripts for their simplicity and versatility. They also offer possibility of having fewer tools to learn, use, and keep track of.

Now that we have (some) idea of what NPM scripts are and what they can do for us, let’s go ahead and write some!

##### The Scripts Object in package.json

Most of our work will happen in the package.json file that NPM uses as a manifest of sorts.

Here’s a sample package.json file:

```
{   
    "name": "super-cool-package",   
    "version": "1.0.0",   
    "scripts": {    
        ...   
    }, 
    "dependencies": { 
        ...
    }    
    "devDependencies": {     
        ...   
    } 
}
```


If you’ve been working with NodeJS and NPM, you will be familiar with the package.json file. Notice the scripts object in the file. This is where our NPM scripts will go. NPM scripts are written as usual JSON key-value pairs where the key is the name of the script and the value contains the script you want to execute.

Here’s perhaps the most popular NPM script (and it’s also a special kind of script):

```
"scripts": {
    "start": "node index.js",
    ...
}
```

You’ve probably seen this tons of times in your package.json files. And you probably know that you can type npm start to execute the script. But this example illustrates the first important aspect of NPM scripts — they are simply terminal commands. They run in the shell of the OS on which they’re executed. So it might be bash for Linux and cmd.exe for Windows.

##### Custom Scripts

NPM also let’s you define your own custom scripts. Let’s look at a super basic custom NPM script that outputs “hello world” to the console. Add this to the scripts object of your package.json file:

```
"say-hello": "echo 'Hello World'"
```

The scripts object in your package.json file should look like this:

```
...
"scripts": {
    "start": "node index.js",
    "say-hello": "echo 'Hello World!'"
}
```

Now try running ```npm say-hello```. Doesn’t work? This is because custom NPM scripts must be preceded by either run-script or run for them to be executed correctly. Try running ```npm run-script say-hello``` or ```npm run say-hello```. The console says, “Hello World!”! We’ve written our first NPM script!

##### Calling NPM Scripts Within Other NPM Scripts

One downside of using NPM scripts shows up when your script is fairly complex (and long). This problem is compounded by the fact that the JSON spec does not support comments. There are a few ways around this problem. One way is to divide your script into small single-purpose scripts and then call them within other NPM scripts. The way to call an NPM script within another is straightforward. Modify your scripts object so that it looks like this:

```
"scripts": {
    "say-hello": "echo 'Hello World'",
    "awesome-npm": "npm run say-hello && echo 'echo NPM is awesome!'"
}
```
Since NPM scripts execute in the shell, calling npm run say-hello within another NPM script is almost intuitive.


##### Calling Shell and Node Scripts

At times, you may have to write scripts far more complex than ones that can be achieved in 2–3 commands. When this situation arises, one solution is to write bash or JS scripts (or scripts in any scripting language you like) and call them from NPM scripts.

Let’s quickly write a bash script that says hello to you. Create a file called ```hello.sh``` in your root directory and paste this code in it:

```
#!/usr/bin/env bash
# filename: hello.sh
echo "What's your name?"
read name
echo "Hello there, $name!"
```

It’s a simple script that echoes your name back to you. Now modify the ```package.json``` file so that the ```scripts``` object has this line of code:

```
"bash-hello": "bash hello.sh"
```

Now, when you run ```npm run bash-hello```, it asks you for your name and then says hello to you! Brilliant.

You can do the same thing with JS scripts run using node. An advantage of this approach is that this script will be platform independent since it uses node to run. Here’s a slightly more complex JS script to add two integers received as command line arguments (put this in a file named add.js):

```
// add.js
// adds two integers received as command line arguments
function add(a, b) {
    return parseInt(a)+parseInt(b);
}
if(!process.argv[2] || !process.argv[3]) {
    console.log('Insufficient number of arguments! Give two numbers please!');
}
else {
    console.log('The sum of', process.argv[2], 'and', process.argv[3], 'is', add(process.argv[2], process.argv[3]));
}
```

The process.argv object contains the command line arguments given to the script. The first two elements, ```process.argv[0]``` and ```process.argv[1]```, are reserved by node. Thus ```process.argv[2]``` and ```process.argv[3]``` let you access the command line arguments.

Now add this line to the ```scripts``` object of the ```package.json``` file:

```
"js-add": "node add.js"
```

Finally, run the script as an npm script by giving it two numbers as command line arguments:

```
npm run js-add 2 3
```

And the output is

```
The sum of 2 and 3 is 5
```

Brilliant! Now we’re capable of writing much more powerful scripts and leveraging the power of other scripting languages.
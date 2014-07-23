Sorting!
========

This directory contains solutions to the Sorting! challenge in
`JavaScript`.

Usage
-----

Use the `run` command to execute the sorter. When called without an
argument it will provide a usage summary with the available sorters.

``` sh
> ./run
usage: run SORTER
where SORTER is one of:
	standard
```

When run with one of the mentioned sorters it will start a repl. In
this reply you can enter comma separated numbers and the loop will
sort them.

``` sh
> ./run standard
> 3,2,1
1,2,3
> 2,3,1
1,2,3
```

Sorters
-------

To create a new sorter you need to

1. make a directory
2. create an index.js

### Make a directory

The directory will be used to differentiate between the different
sorters.

### Create an index.js

Inside the directory there should be an index.js. This needs to be a
`node` module. It should expose one function that accepts an array of
integers and returns the a sorted array.

See `standard` for an implementation.

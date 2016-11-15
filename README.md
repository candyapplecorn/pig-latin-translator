# pig-latin-translator
translates text to pig latin

## Usage:

#### Read from a pipe:

```bash
$echo 'pig latin for breakfast' | piglatin
igpay atinlay orfay eakfastbray
```
#### Or process arguments:
```bash
$piglatin dude why am I eating the moon
udeday why amyay Iyay eatingyay ethay oonmay
```

## bugs

- Doesn't handle elipses ( __...__ ). Could easily make this a feature, but as-is, the code is nice and compact. If someone wants to make a pull request, be my guest - see below:
- Doesn't seem to handle newlines ( __\n__ ) very well - see below:
- Just typing `piglatin` into the command line results in the program waiting for input. Ideally, it'd exit with a usage message. I could implement this but... that's for another day.

```bash
$cat haiku | piglatin
$pr -m -t haiku pigHaiku
An old silent pond...		      Anyay oldyay ilentsay ond...pay

A frog jumps into the pond,	  A ogfray umpsjay intoyay ethay ond,

splash! Silence again.		    splash! Ilencesay again.
				    yay


 by Basho (1644-1694)		       by Ashobay (1644-1694)

```

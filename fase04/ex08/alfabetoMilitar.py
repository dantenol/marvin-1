def alfabetoMilitar(vogal):
	vogal = vogal.lower();
	if vogal not in ('a', 'e', 'i', 'o', 'u'):
		return False;
	return {
		'a': "alpha",
		'e': "echo",
		'i': "india",
		'o': "oscar",
		'u': "uniform"
	}[vogal];

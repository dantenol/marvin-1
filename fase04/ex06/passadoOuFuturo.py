import datetime;

def passadoOuFuturo(date):
	today = datetime.datetime(2015, 10, 21).timestamp();
	if date < today:
		return "Passado";
	else:
		return "Futuro";
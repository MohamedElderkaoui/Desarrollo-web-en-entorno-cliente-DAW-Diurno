import cgi

form = cgi.FieldStorage()

cuenta = form.getvalue('cuenta')
alfanum = form.getvalue('alfanum')
alfanum2 = form.getvalue('alfanum2')

print("Cuenta bancaria:", cuenta)
print("Campo alfanumérico:", alfanum)
print("Campo alfanumérico 2:", alfanum2)

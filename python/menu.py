import random
import time

menu = []

while True:
	print(menu)
	item = input("Add your menu: ")
	if (item == "q"):
		break
	else:
		menu.append(item)
  
set_menu = set(menu)

while True:
	print(set_menu)
	item = input("Delete your menu: ")
	if (item == "q"):
		break
	else:
		set_menu = set_menu - set([item])

print(set_menu,"We are selecting a special menu")

for x in range(5):
	print(5-x)
	time.sleep(1)
  
print(random.choice(list(set_menu)))
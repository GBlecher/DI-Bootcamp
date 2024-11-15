people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

filtered_object = list(filter(lambda name: len(name) <5 , people))

print(filtered_object)

map_obj = list(map(lambda name: f"Hello {name}!" ,filtered_object))

# greeting = map_obj
print(map_obj)

#  Exercise 1 : Convert lists into dictionaries

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# zipped_dict = dict(zip(keys, values))
# print(zipped_dict)

# ______________________________________________________________________________________________

# Exercise 2 : Cinemax #2


# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# price = 0
# price_Total = []


# for  key, value in family.items():
#     if int(value) < 3:
#         price = 0
#     elif int(value) >= 3 and int(value) <= 12:
#         price = 10
#         price_Total.append(price)
#     else:
#         price = 15
#         price_Total.append(price)

#     print(f"{key }: {price}")

# print(f" total: {sum(price_Total)}" )


# ______________________________________________________________________________________________
#  Exercise 3: Zara

# brand = {'name': 'Zara',
#          'creation_date': 1975,
#          'creator_name': 'Amancio Ortega Gaona',
#          'type_of_clothes': ['men', 'women', 'children', 'home'],
#          'international_competitors': ['Gap', 'H&M', 'Benetton'],
#          'number_stores': 7000,
#          'major_color': {'France': 'blue',
#                          'Spain': 'red',
#                          'US': ['pink', 'green']
#                          }
#          }

# brand['number_stores'] = 2
# # print(brand['number_stores'])
# print(f"zaras clients are anyone who would shop in {
#       brand["type_of_clothes"]} sections")

# brand.update({'country_creation': 'Spain'})

# if 'international_competitors' in brand.keys():
#     brand['international_competitors'].append('Desigual')

#     print(brand['international_competitors'])

# del brand['creation_date']
# print(brand['international_competitors'][-1])


# print(brand['major_color']["US"])

# print(len(brand.keys()))
# print(brand.keys())


# more_on_zara = {'creation_date': 1975,
#                 'number_stores': 10000}

# brand.update(more_on_zara)
# print(brand['number_stores'])

## number of stores was overidden because that key already existed
# ______________________________________________________________________________________________


# Exercise 4 : Disney characters

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
numbers =[]


for index in range(len(users)):
    numbers.append(index)
print(numbers)



disney_users_A = dict(zip(users ,numbers))
print(disney_users_A)

disney_users_B =dict(zip(numbers ,users))
print(disney_users_B)

disney_users_C = dict(zip(sorted(users) ,numbers))
print(disney_users_C)


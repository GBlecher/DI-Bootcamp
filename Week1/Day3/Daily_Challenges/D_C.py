# # Challenge 1

# user_word = input("Input word:\t")
# user_word_list= list(user_word)
# index_list=[]
# # print(user_word_list)

  
 

# for each_letter in  user_word_list:
#     index_list.append( user_word_list.index(each_letter))
    

# index_dict = {}


# for index, letter in enumerate(user_word_list):
#     if letter not in index_dict:
#         index_dict[letter] = []  
#     index_dict[letter].append(index)  

# print(index_dict)
# ________________________________________________________________________________________________________________


# Challenge 2



items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 

# ➞ "Nothing"


bought_list = []
 
wallet = int(wallet.replace("$",""))




for value in items_purchase:
    items_purchase[value]= int(items_purchase[value].replace(",","").replace("$",""))
    

sorted_dict = sorted(items_purchase.keys())


for key in sorted_dict:
    value = items_purchase[key] 
    if value <= wallet:
        wallet -= value
        bought_list.append(key)
    else: continue     
        
if   len(bought_list)  == 0:
    print("Nothing")  
else:
    print(bought_list)      




with open("Star_wars.txt","r+",encoding="utf-8") as f:
    
# read line by line & if specified
    # for i in range(10):
    #     content  = f.readline(5)
    #     print(content)

# read first 5 characters
    # content  = f.read(5)
    # print(content)   

#Read whole file
    content = []
    for i in f:
        content.append((f.readline()).strip("\n"))
    # print(content)
#   PRint count of each accurence
    count_Darth = content.count("Darth") 
    count_Lea = content.count("Lea")
    count_Luke = content.count("Luke")
    # print(len(content))
    print(count_Darth)
    print(count_Lea)
    print(count_Luke)
# append new content
    f.write("Gilan")
#  split each item to a new list
    for line in content:
        print(list(line))


        
   
            
    
    
    
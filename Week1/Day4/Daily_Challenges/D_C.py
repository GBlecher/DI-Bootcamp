matrix =  [['7','i','i'],
            ['T','s','x'],
            ['h','%','?'],
            ['i',' ','#'],
            ['s','M',' '],
            ['$','a',' '],
            ['#','t','%'],
            ['^','r','!']
       ]

message_list = []
rows = len(matrix)
cols = len(matrix[0]) if rows > 0 else 0



for col in range(cols):
    for row in range(rows):
        char =matrix[row][col]
        if char.isalpha():
            message_list.append(char)

result= ''.join(message_list)   
      
print(result)

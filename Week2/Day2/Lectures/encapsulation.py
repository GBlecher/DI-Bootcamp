# class Door:
#     def __init__(self, is_opened): 
#         self.is_opened= True
#     def open_door(self) :
#         if self.is_opened :
#             print("Door is already open")
#         else:
            
#             print("Door is now open")
            
#     def close_door(self) :
#         if self.is_opened :
#             self.is_opened = False
#             print("Door is now closed")
#         else:
#              print("Door is already closed")
            
# class BlockedDoor(Door):
#     def open_door(self) :  
#         print("Error can not open door is blocked")
#     def close_door(self):
#         print("Error can not close door is blocked")
    
# TRY & EXCEPT_____________________________________________________________________
my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
sum=0
for item in my_list:
    
    try:
        if isinstance(item,int):
            sum += item  
    except:
        continue
    
    
print(sum) 
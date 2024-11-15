#  TO CHECKER: THIS IS NOT THE SUBMITTED ROCK PAPER SCISSORS. 
# I ACCIDENTLY DID IT FIRST NOT AS OOP. THE SUBMITTED VERSION IS OOP



import random

print("Menu:")
possible_moves = ["rock","paper","scissors"]
scores = {
        "player": 0,
        "computer": 0,
        "draw": 0
          }

while True:
    try:
        Menu_choice = input("(g)- New Game\n(x) Show scores and exit\n >>>\t").lower()
        if Menu_choice == "g":
            while True:
                try:
                    player_choice = input("Select: (r)ock,(p)aper,(s)cissors:\t")
                    if player_choice == "r" or player_choice == "p" or player_choice == "s":
                         print(f"You selected: {player_choice}")
                    break
                except:
                    print("invalid input!\n ")
                    continue
            computer_choice = random.choice(possible_moves)
            print(f"Computer chose: {computer_choice}")
            if player_choice == computer_choice[0]:
                scores["draw"] +=1
                print("Game ended in a tie, no winner this round.\n")
            elif   player_choice == "r":
                    if computer_choice[0] == "s":
                        scores["player"] += 1
                        print("Congrats!! You won this round\n\n")
                    elif computer_choice[0] == "p":
                        scores["computer"] += 1
                        print("Too bad!! Computer won this round\n")
            elif   player_choice == "p":
                    if computer_choice[0] == "r":
                        scores["player"] += 1
                        print("Congrats!! You won this round\n")
                    elif computer_choice[0] == "s":
                        scores["computer"] += 1
                        print("Too bad!! Computer won this round\n")
            elif   player_choice == "s":
                    if computer_choice[0] == "p":
                        scores["player"] += 1
                        print("Congrats!! You won this round\n")
                    elif computer_choice[0] == "r":
                        scores["computer"] += 1            
                        print("Too bad!! Computer won this round\n")
            continue
         
           
            
    except:
        print("invalid input!\n ")  
        continue                  
                    








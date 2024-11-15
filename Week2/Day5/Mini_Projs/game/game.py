import random


class Game:
    def __init__(self):
        self.possible_moves = ["rock", "paper", "scissors"]
        self.scores = {
            "player": 0,
            "computer": 0,
            "draw": 0
        }

    def get_user_item(self):
        while True:
            try:
                user_item = input("Select: (r)ock\n(p)aper\n(s)cissors\n>>>\t")
                if user_item == "r" or user_item == "p" or user_item == "s":
                    return user_item
                else:
                    raise Exception
            except:
                print("invalid input! Try again\n")
                continue

    def get_computer_item(self):
        computer_item = random.choice(self.possible_moves)
        return computer_item

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item[0]:
            print("Game ended in a tie, no winner this round.\n")
            return "draw"

        elif user_item == "r":
            if computer_item[0] == "s":
                print("Congrats!! You won this round\n")
                return "win"
            elif computer_item[0] == "p":
                print("Too bad!! Computer won this round\n")
                return "loss"
        elif user_item == "p":
            if computer_item[0] == "r":
                print("Congrats!! You won this round\n")
                return "win"
            elif computer_item[0] == "s":
                print("Too bad!! Computer won this round\n")
                return "loss"
        elif user_item == "s":
            if computer_item[0] == "p":
                print("Congrats!! You won this round\n")
                return "win"
            elif computer_item[0] == "r":
                print("Too bad!! Computer won this round\n")
                return "loss"

    def play(self):

        user_item = self.get_user_item()
        print(f"You selected: {user_item}")
        computer_item = self.get_computer_item()
        print(f"Computer chose: {computer_item}")

        outcome = self.get_game_result(user_item, computer_item)
        if  outcome == "win":
            self.scores["player"] += 1
            return
        elif outcome == "loss":
            self.scores["computer"] += 1
            return
        elif outcome == "draw":
            self.scores["draw"] += 1
            return

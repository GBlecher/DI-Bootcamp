
from game import Game


def get_user_menu_choice():

    Menu_choice = input(
        "(n) - New Game\n(q) - Show scores\n(x) - Exit\n >>>\t").lower()
    return Menu_choice


def print_results(results):

    print(f"You won {results['player']} times.\n"
          f"The computer won {results['computer']} times.\n"
          f"You drew {results['draw']} times.\n\n"
          "Thanks for playing!!!")


def main():
    while True:
        print("Menu:")
        try:
            Menu_choice = get_user_menu_choice()
            if Menu_choice == "n":
                game.play()
                continue
            elif Menu_choice == "q":
                results = game.scores
                print_results(results)
                continue
            elif Menu_choice == "x":
                return
            else:
                raise Exception
        except:
            print("invalid input! Try again\n")
            continue


game = Game()
main()

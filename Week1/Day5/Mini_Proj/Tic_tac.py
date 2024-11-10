
players = [("Player1", "X"), ("Player2", "O")]


board_matrix = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]


def make_board(board_matrix):

    print("* " * 9)

    for row_index, row in enumerate(board_matrix):
        print("  |  ".join(row))
        if row_index < len(board_matrix) - 1:
            print("-" * 13)
    print("* " * 9)


make_board(board_matrix)


total_turns = 9
turns_played = 0


def  play_game(players, board_matrix, turns_played, total_turns):
    while turns_played < total_turns:
        if turns_played % 2 == 0:
            player_turn = players[0][0]
        else:
            player_turn = players[1][0]

        if player_turn == "Player1":
            player_move = players[0][1]
        else:
            player_move = players[1][1]

        row = int(input(f"{player_turn} input row:\t"))
        column = int(input(f"{player_turn} input column:\t"))

        while ((row > 3 or column > 3) or (row < 1 or column < 1)) or (board_matrix[row - 1][column - 1] != ' ' ):
            if (row > 3 or column > 3) or (row < 1 or column < 1):
                print(" Out of bounds !")
                row = (
                    int(input(f"{player_turn} input row number between 1 and 3:\t")))
                column = (
                    int(input(f"{player_turn} input column number between 1 and 3:\t")))
            elif board_matrix[row - 1][column - 1] != ' ':
                    print(" Spot taken try again!")
                    row = (int(input(f"{player_turn} input row:\t")))
                    column = (int(input(f"{player_turn} input column:\t")))
        else:
            board_matrix[row - 1][column - 1] = player_move
            turns_played += 1
            make_board(board_matrix)

            result = check_winner(board_matrix, player_move, turns_played)
            if result == False:
                continue
            else:
                print(f" Congrats {player_turn}, you won!!!")
                break

    else:
        print("Game Ended in a tie, no one wins!!")


def check_winner(board_matrix, player_move, turns_played):
    if turns_played > 4:
        # check rows
        for row in range(len(board_matrix)):
            count = 0
            for col in range(len(board_matrix)):
                if board_matrix[row][col] == player_move:
                    count += 1
                else:
                    continue
                if count == 3:
                    return True

        # check columns
        for col in range(len(board_matrix)):
            count = 0
            for row in range(len(board_matrix)):
                if board_matrix[row][col] == player_move:
                    count += 1
                else:
                    continue
                if count == 3:
                    return True

        # check diagonals
        if board_matrix[0][0] == player_move:
            if board_matrix[1][1] == player_move:
                if board_matrix[2][2] == player_move:
                    return True
        elif board_matrix[0][2] == player_move:
            if board_matrix[1][1] == player_move:
                if board_matrix[2][0] == player_move:
                    return True

    return False


play_game(players, board_matrix, turns_played, total_turns)

# win_combination = [
# [(0,0), (0,1), (0,2)],
# [(1,0), (1,1), (1,2)],
# [(2,0), (2,1), (2,2)],
# [(0,0), (1,0), (2,0)],
# [(0,1), (1,1), (2,1)],
# [(0,2), (1,2), (2,2)],
# [(0,0), (1,1), (2,2)],
# [(0,2), (1,1), (2,0)]
#  ]

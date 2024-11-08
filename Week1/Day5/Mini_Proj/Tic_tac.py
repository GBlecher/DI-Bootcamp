empty = bool

players = [("Player1", "X"), ("player2", "O")]


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
    print("* " * 17)


make_board(board_matrix)


total_turns = 9
turns_played = 0
# while turns_played < total_turns:
#     if turns_played % 2 == 0:
#         player_turn = players[0][0]
#     else:
#         player_turn = players[1][0]

#     if player_turn == "Player1":
#         player_move = players[0][1]
#     else:
#         player_move = players[1][1]
#     turns_played +=1
#     print(player_turn)


def player_turn(players, board_matrix, turns_played, total_turns):
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
        column=int(input(f"{player_turn} input column:\t"))
        while board_matrix[row - 1][column - 1] != ' ':
            print(" Spot taken try again!")
            row=(int(input(f"{player_turn} input row:\t")))
            column=(int(input(f"{player_turn} input column:\t")))
        else:
            board_matrix[row - 1][column - 1]=player_move
            turns_played += 1
            make_board(board_matrix)


player_turn(players, board_matrix, turns_played, total_turns)








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

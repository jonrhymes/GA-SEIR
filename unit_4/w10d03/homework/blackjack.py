import random
playing = True

# values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
# face = ["Ace", "King", "Queen", "Jack"]
# suit = ["Diamonds", "Hearts", "Clubs", "Spades"]

## Create the Player and House

class Player:
    def __init__(self, name, bankroll, hand):
        self.name = name
        self.bankroll = bankroll
        self.hand = hand

    name = "Player"
    bankroll = 100
    hand = []

    def PlayerSum(self):
        return sum(Player.hand)

class House:
    def __init__(self, name, bankroll, hand):
        self.name = name
        self.bankroll = bankroll
        self.hand = hand

    name = "House"
    bankroll = 1000
    hand = []

    def HouseSum(self):
        return sum(House.hand)

    # def smack(self):
    #     return "Yee-haw! I'll take your money now."

# print(House.name, f"${House.bankroll}")
# opponent = House("House", 1000, "new hand")
# print(opponent.smack())


## DECK

deck = []

## CARDS

class Card():
    values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11] * 4
    # suits = [u"\u2660", u"\u2666", u"\u2665", u"\u2663"]

    def __init__(self, value, suit):
        self.value = value
        # self.suit = suit

    for value in values:
        # for suit in suits:
        deck.append((value))

    # for suit in suits:
    #     deck.append(suit)


# print(deck)
# print(len(deck)) # 52 Cards


## SHUFFLE THE DECK

# random.shuffle(deck)
# print(deck)


## DEAL CARDS

# for Card in range(2):
#     Player.hand.append(deck.pop())
# print(Player.hand)
#
# for Card in range(2):
#     House.hand.append(deck.pop())
# print(House.hand)

def deal(Card):

    for Card in range(2):
        Player.hand.append(deck.pop())
    for Card in range(2):
        House.hand.append(deck.pop())


# deal(Card)

## SHOW CARDS

# print(Player.hand)
# print(House.hand)
# -----------------
# print(len(deck))
# print(deck)

## SUM CARDS

# print(sum(Player.hand))
# print(sum(House.hand))

## COMPARE CARDS

# if sum(Player.hand) == sum(House.hand):
#     print("It's a tie! Bankrolls remain the same.")
# elif sum(Player.hand) and sum(House.hand) < 21:
#     if Player.hand > House.hand:
#         print("Player wins! House loses 10")
#         House.bankroll -= 10
#     elif House.hand > Player.hand:
#         print("House wins! Player loses 10")
#         Player.bankroll -= 10
# elif sum(Player.hand) or sum(House.hand) == 21:
#     if sum(Player.hand) == 21:
#         House.bankroll -= 10
#         print("Player wins! House loses 10")
#     if sum(House.hand) == 21:
#         Player.bankroll -= 10
#         print("House wins! Player loses 10")
# elif sum(Player.hand) or sum(House.hand) > 21:
#         print("player loses")


## DRAW OR QUIT

def draw_or_quit():
    global playing

    while True:
        x = input("What'll it be there, partner? (D)raw or (Q)uit? ")

        if x[0].lower() == "q":
            playing = False
            break

        elif x[0].lower() == "d":
            game()

        else:
            print("Invalid input. Please enter either 'D' for Draw or 'Q' for Quit ")


# draw_or_quit()


## CONSOLE GAME

welcome = input("Woah there, Cowboy! Before you lose big time, tell me your name... ")
print(f"Howdy, {welcome}. Let's play!")
random.shuffle(deck)

def game():

    global playing

    deal(Card)

    print(f"Luck of the draw: {Player.hand} = {sum(Player.hand)}\n"
            f"House's hand: {House.hand} = {sum(House.hand)}\n"
          f"============================")

    if sum(Player.hand) == sum(House.hand):
        print("It's a tie! Bankrolls remain the same.")
    if sum(Player.hand) < 21 and sum(House.hand) < 21:
        if sum(Player.hand) > sum(House.hand):
            House.bankroll -= 10
            print(f"{welcome} wins! House loses 10")
        if sum(Player.hand) < sum(House.hand):
            Player.bankroll -= 10
            print(f"House wins! {welcome} loses 10")
    if sum(Player.hand) > 21 or sum(House.hand) > 21:
        if sum(Player.hand) > 21:
            House.bankroll -= 10
            print(f"BUSTED! {welcome} wins, House loses 10")
        if sum(House.hand) > 21:
            Player.bankroll -= 10
            print(f"BUSTED! House wins, {welcome} loses 10")
    if sum(Player.hand) or sum(House.hand) == 21:
        if sum(Player.hand) == 21:
            House.bankroll -= 10
            print(f"BLACKJACK! {welcome} wins, House loses 10")
        if sum(House.hand) == 21:
            Player.bankroll -= 10
            print(f"BLACKJACK! House wins, {welcome} loses 10")

    while playing:

        x = input("What'll it be there, partner? (D)eal again or (Q)uit? \n"
                  "OR... Check (B)ankroll? ")

        if x[0].lower() == "q":
            playing = False
            break

        elif x[0].lower() == "b":
            print(f"Player: {Player.bankroll}\n"
                  f"House: {House.bankroll}")

        elif x[0].lower() == "d":
            if Player.bankroll == 0 or House.bankroll == 0:
                print("Game over!")
                playing = False
                break
            elif len(deck) < 3:
                print("Game over!")
                playing = False
                break
            elif len(Player.hand) < 2 or len(House.hand) < 2:
                print("Game over!")
                playing = False
                break
            else:
                Player.hand.clear()
                House.hand.clear()
                game()
        else:
            print("-***- Invalid input. Please enter either 'D' for Draw, 'Q' for Quit or 'B' to check Bankroll ")

game()



# welcome = input("Hey, Cowboy. Before you lose big time, tell me your name... ")
# print(f"Howdy, {welcome}. Let's play!")
# play = input("What'll it be there, partner? (Draw again or Quit)")
# smack = print("Yee-haw! I'll take your money now.")
# again = input("Want to try that again, buddy? ")

# y = input("Want to try that again, buddy? (Y)es or (N)o? ")
#
#                 if y[0].lower() == "y":
#                     Player.hand.clear()
#                     House.hand.clear()
#                     random.shuffle(deck)
#                     print(deck)
#                     deal(Card)
#                     print(deck)
#                 if y[0].lower() == "n":
#                     playing = False
#                     break
#
#                 else:
#                     print("! Invalid input. Please enter 'Y' for Yes or 'N' for No. ")


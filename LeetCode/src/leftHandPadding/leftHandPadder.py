with open('speech.txt', 'r') as speech:
    with open('speechPadded.txt', 'w') as speechEdited:
        for line in speech:
            speechEdited, format(line, ">10s")

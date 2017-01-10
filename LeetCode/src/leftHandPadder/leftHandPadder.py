with open('speech.txt', 'r') as speech:
    with open('speechPadded.txt', 'w') as speechPadded:
        for line in speech:
            # print >> speechPadded, format(line, '>10s')
            print(line)

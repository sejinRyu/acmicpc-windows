import sys

[n, row, column] = list(map(int, input().split(' ')))

def f(startRow, startColumn, size, count):
    global row
    global column

    if size == 2:
        if startRow == row and startColumn == column:
            return count
        if startRow == row and startColumn+1 == column:
            return count+1
        if startRow+1 == row and startColumn == column:
            return count+2
        if startRow+1 == row and startColumn+1 == column:
            return count+3
    else:
        if startRow <= row and row < (startRow + size):
            if startColumn <= column and column < (startColumn + size):
                half = int(size/2)
                a = f(startRow, startColumn, half, count)
                b = f(startRow, startColumn+half, half, count + (half**2))
                c = f(startRow+half, startColumn, half, count + 2*(half**2))
                d = f(startRow+half, startColumn+half, half, count + 3*(half**2))
                if a is not None:
                    return a
                if b is not None:
                    return b
                if c is not None:
                    return c
                if d is not None:
                    return d
        return
        

print(f(0, 0, 2**n, 0))
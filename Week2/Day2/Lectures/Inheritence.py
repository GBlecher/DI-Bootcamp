class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)


#  output = diameter = 1
nc = NewCircle(1)
# print(nc.diameter)

#  output = 4
nc.grow()
print(nc.diameter)
# # >> What will be the output

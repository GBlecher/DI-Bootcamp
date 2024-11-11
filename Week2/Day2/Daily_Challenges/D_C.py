# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

# The Pagination class will accept 2 parameters:

# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:


class Pagination:
    def __init__(self, items=[], pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = pageSize
        self.totalPages = (len(self.items)/self.pageSize ) + 1

    def getVisibleItems(self):

        # return self.items[self.currentPage - self.pageSize: self.currentPage]
        print (self.items[self.currentPage - self.pageSize: self.currentPage])

    def firstPage(self):
        self.currentPage = self.pageSize

    def nextPage(self):
        if self.currentPage < len(self.items):
            self.currentPage += self.pageSize

        return self.currentPage

    def prevPage(self):
        if self.currentPage > self.pageSize:
            self.currentPage -= self.pageSize

        return self.currentPage

    def lastPage(self):
        
        if self.totalPages % 1 != 0:
            lastpage = int(self.totalPages)* self.pageSize  
        else:
            lastpage  = len(self.items)    
        
        self.currentPage = lastpage    
        return self.currentPage

    def goToPage(self, pageNum):
        
        if pageNum > int(self.totalPages):
           self.currentPage = int(self.totalPages)* self.pageSize
        else: 
            self.currentPage = pageNum * self.pageSize

     
        return self.currentPage
        


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 11)


p.firstPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.prevPage()
p.getVisibleItems()
p.firstPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.goToPage(1)
p.getVisibleItems()
p.goToPage(4)
p.getVisibleItems()


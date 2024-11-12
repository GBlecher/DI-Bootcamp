

class Pagination:
    def __init__(self, items=[], pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = pageSize
        self.totalPages = (len(self.items)/self.pageSize) + 1

    def getVisibleItems(self):
        print(self.items[self.currentPage - self.pageSize: self.currentPage])

    def firstPage(self):
        self.currentPage = self.pageSize
        self.getVisibleItems()
        return self

    def nextPage(self):
        if self.currentPage < len(self.items):
            self.currentPage += self.pageSize
        self.getVisibleItems()
        return self

    def prevPage(self):
        if self.currentPage > self.pageSize:
            self.currentPage -= self.pageSize
        self.getVisibleItems()
        return self

    def lastPage(self):

        if self.totalPages % 1 != 0:
            lastpage = int(self.totalPages) * self.pageSize
        else:
            lastpage = len(self.items)

        self.currentPage = lastpage
        self.getVisibleItems()
        return self

    def goToPage(self, pageNum):

        if pageNum > int(self.totalPages):
            self.currentPage = int(self.totalPages) * self.pageSize
        else:
            self.currentPage = pageNum * self.pageSize

        self.getVisibleItems()
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)


p.firstPage().nextPage().nextPage().goToPage(4).lastPage().prevPage()

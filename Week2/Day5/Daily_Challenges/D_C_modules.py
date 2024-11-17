import requests
import time

def measure_loading_time(url):
    start_time = time.time()
    response = requests.get(url)
    end_time =time.time()
    
    return end_time - start_time
    
       

urls = ["https://octopus.developers.institute/", "https://github.com/","https://www.ynet.co.il","https://www.google.com"]


for url in urls:
    load_time = measure_loading_time(url)
    print(f"Loadtime for {url}: {load_time} seconds")







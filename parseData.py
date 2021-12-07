from bs4 import BeautifulSoup
import requests
import json

url = "https://megogo.net/ru/premiere?utm_source=megogo&utm_medium=premiere&utm_campaign=premiere_premiere"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Finding name
code_name = soup.find_all('h3', class_="video-title card-content-title")
name = []
for i in code_name:
    name.append(i.text.strip())

# Finding year
code_year = soup.find_all('span', class_="video-year")
year = []
for i in code_year:
    year.append(i.text)

# Finding category
code_catrgory = soup.find_all('span', class_="video-country")
category = []
for i in code_catrgory:
    category.append(i.text)

# Finding link
code_link = soup.find_all('a', class_="overlay")
link = []
for i in code_link:
    link.append(i['href'])

# Finding link of image
img = []
for i in name:
    code_img = soup.find_all('img', alt=i)
    img.append(code_img[0]['data-original'])

movies = []

for i in range(30):
    movies.append({"name": name[i], "link": link[i], "year": year[i], "category": category[i], "img_link": img[i]})

json_object = json.dumps(movies)
with open('output.json', 'w', encoding="UTF-8") as outfile:
    json.dump(json_object, outfile)

with open('result.txt', 'w') as f:
    for movie in movies:
        f.write(str(movie))

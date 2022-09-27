import pandas as pd
import matplotlib.pyplot as plt


col_list = ["temperature", "moisture"]
sheet_id = '1wSJlqRwgLjBUSNFUYhzEUhmq1vtE33c9bF0ReNIP10s'

df = pd.read_csv(f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv",usecols=col_list)

xpt = df["temperature"]
ypt = df["moisture"]

tempMean =  df["temperature"].mean()
moistMean =  df["moisture"].mean()

plt.plot(xpt,ypt)
plt.show()

if tempMean < 40 and moistMean < 200 :
  print("your soil is Good")

if tempMean > 40 and moistMean > 200:
  print("your soil needs Water") 



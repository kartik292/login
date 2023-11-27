# Machine learning 
from sklearn.svm import SVC 
from sklearn.metrics import accuracy_score 
import matplotlib.pyplot as plt 
%matplotlib inline 

# For data manipulation 
import pandas as pd 
import numpy as np 

# To plot 
import matplotlib.pyplot as plt 
plt.style.use('seaborn-darkgrid') 

# To ignore warnings 
import warnings 
warnings.filterwarnings("ignore")

# Read the csv file using read_csv 
# method of pandas 
df = pd.read_csv('RELIANCE.csv') 
df
# Changes The Date column as index columns 
df.index = pd.to_datetime(df['Date']) 
df 

# drop The original date column 
df = df.drop(['Date'], axis='columns') 
df 
# Create predictor variables 
df['Open-Close'] = df.Open - df.Close 
df['High-Low'] = df.High - df.Low 

# Store all predictor variables in a variable X 
X = df[['Open-Close', 'High-Low']] 
X.head() 
# Target variables 
y = np.where(df['Close'].shift(-1) > df['Close'], 1, 0) 
y
split_percentage = 0.8
split = int(split_percentage*len(df)) 

# Train data set 
X_train = X[:split] 
y_train = y[:split] 

# Test data set 
X_test = X[split:] 
y_test = y[split:]
# Support vector classifier 
cls = SVC().fit(X_train, y_train)

df['Predicted_Signal'] = cls.predict(X)

# Calculate daily returns 
df['Return'] = df.Close.pct_change()
# Calculate Cumulutive returns 
df['Cum_Ret'] = df['Return'].cumsum() 
df
# Plot Strategy Cumulative returns 
df['Cum_Strategy'] = df['Strategy_Return'].cumsum() 
df


plt.plot(df['Cum_Ret'],color='red') 
plt.plot(df['Cum_Strategy'],color='blue')

import pandas as pd
import numpy as np
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Load dataset
df = pd.read_csv("data/species_training_data.csv")

# Features
X = df[["temp", "salinity", "depth", "chlorophyll", "trend"]]
y = df["label"]

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Model
model = RandomForestClassifier(
    n_estimators=200,
    max_depth=10,
    random_state=42
)

model.fit(X_train, y_train)

# Evaluate
pred = model.predict(X_test)
print(classification_report(y_test, pred))

# Save model
joblib.dump(model, "../models/species_model.pkl")

print("Model trained and saved.")

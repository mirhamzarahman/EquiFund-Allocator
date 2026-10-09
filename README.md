# ⚖️ EquiFund Allocator

A lightweight JavaScript project that calculates the minimum financial assistance required to balance funding across a community while preserving existing allocations.

---

## 📖 Project Overview

EquiFund Allocator models a simple resource-balancing system where an organization wants every participant to reach the same funding level without reducing anyone's current allocation.

Instead of redistributing resources, the system only provides additional funding to those below the highest existing allocation, ensuring fairness with the minimum possible investment.

---

## 🌍 Real-World Concept

Imagine an organization providing grants to schools.

Some schools already receive more funding than others.

Rather than reducing anyone's budget, the organization decides to increase lower-funded schools until every school has the same funding level.

The project calculates the smallest total investment required.

---

# 💡 Core Concept

The system finds the highest existing allocation and determines how much funding each participant needs to reach that value.

Total Required Funding = Σ (Maximum Allocation − Current Allocation)

---

# ⚙️ How the System Works

1. Receive a list of funding amounts.
2. Identify the highest allocation.
3. Compare every allocation against the highest one.
4. Calculate each participant's missing amount.
5. Sum every required increase.
6. Return the minimum total funding required.

---

# 🧠 Algorithm Used

- Linear Search
- Aggregation
- Greedy Resource Equalization

Since reducing allocations is not allowed, the optimal target is always the current maximum allocation.

---

# 🔄 Step-by-Step Logic

```text
Find highest allocation
        │
        ▼
Compare every allocation
        │
        ▼
Calculate missing amount
        │
        ▼
Accumulate total funding
        │
        ▼
Return minimum investment
```

---

# ✨ Key Features

- ⚡ Linear-time execution
- 📊 Resource balancing
- 💰 Minimum funding calculation
- 📈 Scalable for larger datasets
- 🧹 Clean and readable implementation
- ✅ Easy integration into planning systems

---

# 📌 Example Use Case

### Input

```text
Funding:
[0, 1, 2, 3, 4]
```

### Processing

Maximum Funding

```text
4
```

Additional Funding Needed

```text
4
3
2
1
0
```

### Output

```text
10
```

Meaning the organization must invest **10 units** to equalize all funding.

---

# ⏱ Complexity

| Operation | Complexity |
|------------|-----------|
| Find Maximum | O(n) |
| Calculate Required Funding | O(n) |
| Total Time | **O(n)** |
| Space | **O(1)** |

---

# 🛠 Technologies Used

- JavaScript (ES6)
- Node.js

---

# 📁 Project Structure

```text
EquiFund-Allocator/
│
├── README.md
├── allocator.js
└── LICENSE
```

---

# 🚀 How to Run the Project

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/EquiFund-Allocator.git
```

Go into the project

```bash
cd EquiFund-Allocator
```

Run

```bash
node allocator.js
```

Example

```javascript
const funding = [5, 7, 2, 6];

console.log(calculateRequiredFunding(funding));
```

Output

```text
8
```

---

# 🎯 Learning Outcomes

This project demonstrates:

- Greedy optimization
- Linear search
- Efficient aggregation
- Resource balancing
- Practical algorithm design
- Writing clean and maintainable JavaScript

---

# 🚀 Future Improvements

- 📈 Funding analytics dashboard
- 🌐 Web interface
- 📊 Allocation visualization
- 📁 CSV import/export
- 📉 Budget forecasting
- 🔍 Department-level reports
- ☁ Cloud deployment

---

# 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by **Mir Hamza Rahman**

// State
const names = ['Alice', 'Bob', 'Yania', 'Gabrielle', 'Katrina', 'Betty', 'Isabelle', 'Lenny', 'Dylan', 'Mateo', 'Jacob', 'Caleb']
const occupations = ['Writer', 'Teacher', 'Lawyer', 'Developer', 'Petsitter', 'Babysitter', 'Mechanic', 'Artist', 'Designer', 'Secretary', 'Plumber', 'Entertainer']
const prices = ['20', '30', '40', '50', '60', '70', '80', '90', '100']
const available = [
    {name: "Alice", occupation: "Writer", price: 30},
    {name: "Bob", occupation: "Teacher", price: 50}
]

// Function to calculate average price
function calculateAverage(freelancers) {
    const totalPrice = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
    return totalPrice / freelancers.length;
}

// Function to render freelancers and update average price
function render() {
    const freelancerList = document.querySelector("#freelancers");
    const averageDisplay = document.querySelector("#average");

    freelancerList.innerHTML = "";

    available.forEach((freelancer) => {
    const freelancerItem = document.createElement("li");
    freelancerItem.textContent = `${freelancer.name} is a ${freelancer.occupation} with a starting price of $${freelancer.price}`;
    freelancerList.appendChild(freelancerItem);
});

// Calculate average price 
const averagePrice = calculateAverage(available);
averageDisplay.textContent = `The average starting price is: $${averagePrice.toFixed(2)}`;
}

// Function to add a new Freelancer
function addFreelancer() {
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomOccupationIndex = Math.floor(Math.random() * occupations.length);
  const randomPriceIndex = Math.floor(Math.random() * prices.length);

  const newFreelancer = {
    name: names[randomNameIndex],
    occupation: occupations[randomOccupationIndex],
    price: parseInt(prices[randomPriceIndex]),
  };

  available.push(newFreelancer);
  render();
}

// Interval
setInterval(addFreelancer, 4000);

render();

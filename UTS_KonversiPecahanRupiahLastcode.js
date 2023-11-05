
function convert() {
            // Get the input value
            var input = document.getElementById("input").value;

            // Check if the input is valid
            if (input == "" || input % 25 != 0) {
                alert("Masukkan nilai uang yang valid!");
                return;
            }

            // Convert the input to an integer
            var value = parseInt(input);

            // Calculate the number of each denomination
            var rp1000 = Math.floor(value / 1000);
            var rp500 = Math.floor((value % 1000) / 500);
            var rp100 = Math.floor((value % 500) / 100);
            var rp50 = Math.floor((value % 100) / 50);
            var rp25 = Math.floor((value % 50) / 25);

            // Display the results in the table
            document.getElementById("rp1000").innerHTML = rp1000;
            document.getElementById("rp500").innerHTML = rp500;
            document.getElementById("rp100").innerHTML = rp100;
            document.getElementById("rp50").innerHTML = rp50;
            document.getElementById("rp25").innerHTML = rp25;
        }

function reset() {
            document.getElementById("input").value = "";
            document.getElementById("rp1000").innerHTML = "0";
            document.getElementById("rp500").innerHTML = "0";
            document.getElementById("rp100").innerHTML = "0";
            document.getElementById("rp50").innerHTML = "0";
            document.getElementById("rp25").innerHTML = "0";
        }


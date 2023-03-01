canvas = document.getElementById("Canvas");
cva= canvas.getContext("2d");

cva.beginPath();
cva.strokeStyle = "grey";
cva.lineWidth = 1;
cva.rect(150, 143, 430, 200);
cva.stroke();

cva.beginPath();
cva.strokeStyle = "blue";
cva.lineWidth = 5;
cva.arc(250, 210, 40 ,0 , 2 * Math.PI);
cva.stroke();

cva.beginPath();
cva.strokeStyle = "black";
cva.lineWidth = 5;
cva.arc(350, 210, 40 ,0 , 2 * Math.PI);
cva.stroke();

cva.beginPath();
cva.strokeStyle = "red";
cva.lineWidth = 5;
cva.arc(450, 210, 40 ,0 , 2 * Math.PI);
cva.stroke();

cva.beginPath();
cva.strokeStyle = "orange";
cva.lineWidth = 5;
cva.arc(300, 250, 40 ,0 , 2 * Math.PI);
cva.stroke();

cva.beginPath();
cva.strokeStyle = "green";
cva.lineWidth = 5;
cva.arc(400, 250, 40 ,0 , 2 * Math.PI);
cva.stroke();

import Swal from "sweetalert2";

export const fireAlert=(message)=>{
  Swal.fire({
    position: "center",
    title: message,
    icon: "warning",
  });
}
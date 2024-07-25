import { useEffect, useState } from "react";

const Useadmin = email => {
  const [IsAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://green-ven-server-4mnt-pc0f0qgxn.vercel.app/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
          console.log("Admin check data:", data); // Debugging line
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        })
        .catch(err => {
          console.error("Error fetching admin status:", err); // Debugging line
          setIsAdminLoading(false);
        });
    }
  }, [email]);

  return [IsAdmin, isAdminLoading];
};

export default Useadmin;

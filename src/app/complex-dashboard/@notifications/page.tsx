import Card from "@/components/card";
import React from "react";
import Link from "next/link";

const NotificationPage = () => {
  return (
    <Card>
      <div>Notification Page</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default NotificationPage;

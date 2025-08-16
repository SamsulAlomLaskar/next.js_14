import Card from "@/components/card";
import React from "react";
import Link from "next/link";

const ArchivedNotificationPage = () => {
  return (
    <Card>
      <div>Archived Notification Page</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotificationPage;

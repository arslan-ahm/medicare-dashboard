import NotificationList from "@/components/details/lists/notifications/NotificationList";
import NotificationActions from "@/components/pageTitlebar/NotificationActions";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";

const Notification = () => {
  return (
    <section className="sm:px-4">
      <div className="mt-2">
        <PageTitleBar title="Notifications">
          <NotificationActions />
        </PageTitleBar>
      </div>
      <div className="sm:p-4 mt-4 bg-white">
        <NotificationList />
      </div>
    </section>
  );
};

export default Notification;

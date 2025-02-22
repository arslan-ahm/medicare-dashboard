import NotificationActions from "@/components/pageTitlebar/NotificationActions";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";

const Notification = () => {
  return (
    <section>
      <div className="mt-2 px-4">
        <PageTitleBar title="Notifications">
          <NotificationActions />
        </PageTitleBar>
      </div>
    </section>
  );
};

export default Notification;

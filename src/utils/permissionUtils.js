// utils/permissionUtils.js

export const getResourcePermission = (
  resources,
  resourceName
) => {
  return (
    resources.find(
      (item) =>
        item.resource_name === resourceName
    ) || {}
  );
};
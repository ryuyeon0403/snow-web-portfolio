import { Box, Stack } from "@mui/material";

interface Props {
  children: React.ReactNode;
  content?: React.ReactNode;
  bottomContent?: React.ReactNode;
  sx?: {};
  ref?: any;
  contentSx?: {};
}

const ProjectLayout = ({
  children,
  content,
  sx,
  bottomContent,
  ref,
  contentSx,
}: Props) => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      sx={{ ...sx }}
      ref={ref}
    >
      {content}
      <Stack
        direction={"column"}
        maxWidth={"1920px"}
        width={"100%"}
        // justifyContent="space-between"
        sx={{ ...contentSx }}
      >
        {children}
      </Stack>
      {bottomContent}
    </Stack>
  );
};

export default ProjectLayout;

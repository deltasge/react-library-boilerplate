import "../../utils/string.extensions";
import React, { FC } from "react";
import { Avatar as AvatarMUI, SxProps, Theme } from "@mui/material";

export const Avatar: FC<{
  displayName?: string;
  src?: string | null;
  sx?: SxProps<Theme>;
}> = ({ displayName, src, sx }) => {
  if (src)
    return (
      <AvatarMUI
        sx={{
          ...sx,
          bgcolor: displayName ? displayName.toColor() : undefined,
        }}
        src={src}
        alt={displayName ?? "Usuário"}
      />
    );
  else if (displayName)
    return (
      <AvatarMUI
        sx={{
          ...sx,
          bgcolor: displayName ? displayName.toColor() : undefined,
        }}
      >
        {displayName.at(0)}
      </AvatarMUI>
    );
  return <AvatarMUI sx={sx} />;
};

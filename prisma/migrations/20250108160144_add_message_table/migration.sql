BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Messages] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Messages_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [senderId] NVARCHAR(1000) NOT NULL,
    [receiverId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Messages_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Messages] ADD CONSTRAINT [Messages_senderId_fkey] FOREIGN KEY ([senderId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Messages] ADD CONSTRAINT [Messages_receiverId_fkey] FOREIGN KEY ([receiverId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

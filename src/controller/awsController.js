const aws = require('@aws-sdk/client-s3')

const s3Client = new aws.S3Client(
    {
        credentials: {
            accessKeyId: "AKIAY3L35MCRVFM24Q7U",
        secretAccessKey: "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"
        },
        region: "ap-south-1"
    } 
)

const uploadFile = async function(file,folder) {
    
    const uploadParams = {
        ACL: "public-read",
        Bucket: "classroom-training-bucket",
        Key: folder + "/" + file.originalname,
        Body: file.buffer,
    }
    const data = s3Client.send(new aws.PutObjectCommand(uploadParams))

    return `https://${uploadParams.Bucket}.s3.ap-south-1.amazonaws.com/${uploadParams.Key}`
}

module.exports.uploadFile = uploadFile
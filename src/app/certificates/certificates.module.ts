import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Certificates, CertificatesSchema } from './schema/certificates.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Certificates.name,
        schema: CertificatesSchema,
      },
    ]),
  ],
  providers: [CertificatesService],
  controllers: [CertificatesController],
})
export class CertificatesModule {}
